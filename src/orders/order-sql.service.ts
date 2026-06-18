import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
import { OrderSqlModel } from "@app/sql-schema/order.sql-schema";
import { PaystackService } from "@app/service/payment/paystack";
import { OrderDto, UserDTO } from "@app/dto";
import {
  getSqlMetadata,
  ObjectReturnType,
  serviceResponse,
  SendMailService,
  FlutterwaveService,
} from "@app/service";
import { randomUUID } from "crypto";
import {
  CartSqlModel,
  DeliveryPriceSqlModel,
  PickupLocationSqlModel,
  ProductSqlModel,
  TransactionSqlModel,
} from "@app/sql-schema";

@Injectable()
export class OrderSqlService {
  constructor(
    @InjectRepository(OrderSqlModel)
    private readonly orderRepository: Repository<OrderSqlModel>,
    @InjectRepository(PickupLocationSqlModel)
    private readonly pickupLocationRepository: Repository<
      PickupLocationSqlModel
    >,
    @InjectRepository(CartSqlModel)
    private readonly cartRepository: Repository<CartSqlModel>,
    @InjectRepository(DeliveryPriceSqlModel)
    private readonly deliveryPriceSqlModelRepository: Repository<
      DeliveryPriceSqlModel
    >,
    private paystack: PaystackService,
    private sendMailService: SendMailService,
    @InjectRepository(TransactionSqlModel)
    private readonly transactionRepository: Repository<TransactionSqlModel>,


  ) { }

  async create(order: OrderDto, userData: UserDTO): Promise<ObjectReturnType> {
    try {
      const tx_ref = `smartprints-${userData.id}-${randomUUID()
        .replace(/\D/g, "")
        .substring(0, 10)}`;

      const cartItems = await this.cartRepository.find({
        where: { userID: userData._id },
      });
      const totalPrice = cartItems.reduce(
        (sum, item) => sum + (Number(item?.price) || 0),
        0
      );
      const delivery = await this.deliveryPriceSqlModelRepository.findOne({
        where: {
          state: order.orderDetails?.state,
          lga: order.orderDetails?.lga,
          zone: order.orderDetails?.wards,
        },
      });
      let deliveryFee = 0;
      if (order?.pickupLocationID) {
        const location = await this.pickupLocationRepository.findOne({
          where: { _id: order?.pickupLocationID },
        });
        if (!location) {
          throw new NotFoundException("Pickup location not found");
        }
        deliveryFee = Number(location?.price);
      } else {
        for (let i = 0; i < cartItems.length; i++) {
          deliveryFee += delivery?.deliveryFee ?? 3000;
          if (cartItems[i].quantity && cartItems[i].quantity > 1) {
            deliveryFee +=
              (cartItems[i].quantity - 1) * (delivery?.additionalFee ?? 1000);
          }
        }
      }

      console.log({ delivery2: delivery });
      console.log({
        ...order,
        tx_ref,
        products: cartItems,
        totalPrice: totalPrice,
        deliveryFee,
        userID: userData._id.toString(),
      });
      // Fixed delivery fee
      const newOrder = this.orderRepository.create({
        ...order,
        tx_ref,
        products: cartItems,
        totalPrice: totalPrice,
        deliveryFee,
        userID: userData._id.toString(),
      });
      const created = await this.orderRepository.save(newOrder);

      console.log(created);
      const paymentrequest = {
        amount: Number(created.totalPrice) + Number(created.deliveryFee),
        currency: "NGN",
        email: userData.email,
        callback_url:
          "https://smartprints.ng/?payment=" + created._id.toString(),
        metadata: {
          tx_ref,
          orderID: created._id.toString(),
          userId: userData._id.toString(),
        },
      };

      const payment = await this.paystack.createPaymentLink(paymentrequest);
      console.log(payment);

      const check = await this.orderRepository.update(created._id.toString(), {
        paystackRef: payment.data.reference,
        authorization_url: payment.data.authorization_url,
        accessCode: payment.data.access_code,
      });

      return serviceResponse({
        data: payment.data.authorization_url,
        message: "Order plan created successfully",

        status: true,
      });
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(query): Promise<ObjectReturnType> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const data = await this.orderRepository.find({
      take: limit,
      skip: skip,
      order: {
        createdAt: "DESC",
      },
      relations: [
        "user",
        // 'products',
      ],
    });
    //  const carts = await this.cartRepository.find({
    //         where:{$in:{_id:pr}},
    //         relations:['product']
    //     })
    return serviceResponse({
      data,
      message: "Orders retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.orderRepository,
        query,
      }),
    });
  }

  async findByAny(params: any, query: any): Promise<ObjectReturnType> {
    const { key, value } = params;
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const data = await this.orderRepository.find({
      // where status is not pending
      where: { [key]: value,  status: Not("pending"),},
      take: limit,
      skip: skip,
      order: {
        createdAt: "DESC",
      },
      relations: ["user"],
    });

    return serviceResponse({
      data,
      message: "Orders retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.orderRepository,
        query,
        querys: { [key]: value },
      }),
    });
  }

  async update(id: string, order: OrderDto): Promise<OrderSqlModel> {
    const existingOrder = await this.orderRepository.findOne({
      where: { _id: id },
      relations: ["user"],
    });

    if (!existingOrder) {
      throw new NotFoundException("Order not found");
    }

    await this.orderRepository.update(id, order as any);

    if (order.status && order.status !== existingOrder.status) {
      const user = existingOrder.user;
      if (user && user.email) {
        let subject = `Order Status Update - ${existingOrder.tx_ref}`;
        let text = `Your order status has been updated to ${order.status}.`;
        let html = `<p>Hello ${user.fullname || "User"},</p><p>Your order status has been updated to <strong>${order.status}</strong>.</p>`;

        if (order.status === "cancelled") {
          subject = `Order Cancelled - ${existingOrder.tx_ref}`;
          text = `Your order with reference ${existingOrder.tx_ref} has been cancelled.`;
          html = `<p>Hello ${user.fullname || "User"},</p><p>Your order with reference ${existingOrder.tx_ref} has been cancelled.</p>`;
        }

        await this.sendMailService.sendMail({
          to: user.email,
          subject,
          // text,
          html,
        });
      }
    }

    return this.orderRepository.findOne({ where: { _id: id } });
  }

  async remove(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }

  async verifyOrderPayment(id: string, userData: UserDTO): Promise<ObjectReturnType> {
    try {
      const plan = await this.orderRepository.findOne({
        where: { _id: id },
        relations: ["user"],
      });

      if (!plan) {
        throw new NotFoundException("Order not found");
      }
      if (!plan.paystackRef) {
        throw new NotFoundException(
          "No payment reference found for this order"
        );
      }
      if (plan.isPaid) {
        return serviceResponse({
          data: plan,
          message: "Order already paid",
          status: true,
        });
      }
      const v = await this.paystack.verifyPaymentLink(plan.paystackRef);
      if (v.data.status === "success") {
        const subject = "Order Confirmation";
        //  const text = `Hello ${userData.firstname},\n\nYour order has been placed successfully. We have received your payment and will process your order shortly. If you have any questions, please contact our customer support.\n\nThank you for your purchase!`;
        const html = `<p>Hello ${userData.firstname},</p><p>Your order has been placed successfully. We have received your payment and will process your order shortly. If you have any questions, please contact our customer support.</p><p>Thank you for your purchase!</p>`;

        await this.sendMailService.sendMail({
          to: userData.email,
          subject,
          // text,
          html,
        });
        await this.orderRepository.update(id, {
          isPaid: true,
          status: "success",
        });
        await this.cartRepository.delete(
          {
            userID: plan.user._id

          });
        for (let i = 0; i < plan.products.length; i++) {
          const element = plan?.products[i];
          const transaction = await this.transactionRepository.create({

            amount: element?.price,
            reference: v?.data?.reference,
            status: "active",
            productID: element?._id,
            userID: plan?.userID,
            metadata: element?.metadata,
            transactionType: "order",
            orderID: plan._id,

          });
          await this.transactionRepository.save(transaction);
        }
      } else if (["abandoned", "ongoing"].includes(v.data.status)) {
        plan.isPaid = false;
        plan.status = "abandoned";
        await this.orderRepository.update(id, {
          isPaid: false,
          status: "abandoned",
        });
        if (plan.user && plan.user.email) {
          await this.sendMailService.sendMail({
            to: plan.user.email,
            subject: `Order Payment Abandoned - ${plan.tx_ref}`,
            text: `Your order with reference ${plan.tx_ref} has been marked as abandoned due to incomplete payment.`,
            html: `<p>Hello ${plan.user.fullname || "User"},</p><p>Your order with reference ${plan.tx_ref} has been marked as abandoned due to incomplete payment.</p>`,
          });
        }
      } else {
        await this.orderRepository.update(id, {
          isPaid: false,
          status: "cancelled",
        });
        if (plan.user && plan.user.email) {
          await this.sendMailService.sendMail({
            to: plan.user.email,
            subject: `Order Cancelled - ${plan.tx_ref}`,
            text: `Your order with reference ${plan.tx_ref} has been cancelled due to payment failure.`,
            html: `<p>Hello ${plan.user.fullname || "User"},</p><p>Your order with reference ${plan.tx_ref} has been cancelled due to payment failure.</p>`,
          });
        }
      }

      return serviceResponse({
        data: plan,
        message: "Order plan retrieved successfully",
        status: true,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //   async handleFlutterwaveWebhook(req: any): Promise<any> {
  //     try {
  //       // Validate webhook signature and get payload
  //       // Note: FlutterwaveService.handleWebhook returns req.body if signature is valid
  //       const payload = await this.paystack.handleWebhook(req);
  //       console.log(object)
  //       const { data } = payload;

  //       if (!data || !data.tx_ref) {
  //          console.error("Flutterwave Webhook: Invalid payload or missing tx_ref");
  //          return { status: "failed", message: "Invalid payload" };
  //       }

  //       const tx_ref = data.tx_ref;

  //       const plan = await this.orderRepository.findOne({
  //         where: { tx_ref },
  //         relations: ["user"],
  //       });

  //       if (!plan) {
  //         console.error(`Flutterwave Webhook: Order not found for tx_ref ${tx_ref}`);
  //         // Return success to acknowledge webhook even if order not found (to stop retries)
  //         // or throw error if you want retries. Usually acknowledge.
  //         return { status: "success", message: "Order not found" };
  //       }

  //       if (plan.isPaid) {
  //         return { status: "success", message: "Order already paid" };
  //       }

  //       // Check transaction status
  //       if (data.status === "successful") {
  //          const subject = "Order Confirmation";
  //          const html = `<p>Hello ${plan.user?.firstname || plan.user?.fullname || "User"},</p><p>Your order has been placed successfully. We have received your payment and will process your order shortly. If you have any questions, please contact our customer support.</p><p>Thank you for your purchase!</p>`;

  //          //clear user cart




  //          if (plan.user && plan.user.email) {
  //             await this.sendMailService.sendMail({
  //                 to: plan.user.email,
  //                 subject,
  //                 html,
  //             });
  //          }

  //          await this.orderRepository.update(plan._id, {
  //             isPaid: true,
  //             status: "success",
  //             flutterwaveRef: data.flw_ref || data.id, // Store flutterwave reference if available
  //          });
  //  await this.cartRepository.delete(
  //               {
  //                   userID: plan.user._id

  //             });
  //       } else if (["abandoned", "ongoing"].includes(data.status)) {
  //         await this.orderRepository.update(plan._id, {
  //           isPaid: false,
  //           status: "abandoned",
  //         });
  //         if (plan.user && plan.user.email) {
  //             await this.sendMailService.sendMail({
  //                 to: plan.user.email,
  //                 subject: `Order Payment Abandoned - ${plan.tx_ref}`,
  //                 text: `Your order with reference ${plan.tx_ref} has been marked as abandoned due to incomplete payment.`,
  //                 html: `<p>Hello ${plan.user.fullname || "User"},</p><p>Your order with reference ${plan.tx_ref} has been marked as abandoned due to incomplete payment.</p>`,
  //             });
  //         }
  //       } else {
  //         // Failed or cancelled
  //         await this.orderRepository.update(plan._id, {
  //           isPaid: false,
  //           status: "cancelled",
  //         });
  //         if (plan.user && plan.user.email) {
  //             await this.sendMailService.sendMail({
  //                 to: plan.user.email,
  //                 subject: `Order Cancelled - ${plan.tx_ref}`,
  //                 text: `Your order with reference ${plan.tx_ref} has been cancelled due to payment failure.`,
  //                 html: `<p>Hello ${plan.user.fullname || "User"},</p><p>Your order with reference ${plan.tx_ref} has been cancelled due to payment failure.</p>`,
  //             });
  //         }
  //       }

  //       return { status: "success", message: "Webhook processed" };

  //     } catch (error) {
  //       console.error("Flutterwave Webhook Error:", error);
  //       // Return 200 to prevent retries if it's a logic error, or throw if temporary.
  //       // Usually best to catch and log.
  //       throw new NotAcceptableException(error.message);
  //     }
  //   }

  async handlePaystackWebhook(req: any): Promise<any> {
    try {
      const payload = await this.paystack.handleWebhook(req);
      const { event, data } = payload;

      console.log("payload", payload)
      if (event !== "charge.success") {
        return { status: "success", message: "Event ignored" };
      }

      const reference = data.reference;

      // Find order by paystackRef (which stores the reference)
      const plan = await this.orderRepository.findOne({
        where: { paystackRef: reference },
        relations: ["user"],
      });

      if (!plan) {
        console.error(`Paystack Webhook: Order not found for reference ${reference}`);
        return { status: "success", message: "Order not found" };
      }

      if (plan.isPaid) {
        return { status: "success", message: "Order already paid" };
      }

      if (data.status === "success") {
        const subject = "Order Confirmation";
        const html = `<p>Hello ${plan.user?.firstname || plan.user?.fullname || "User"},</p><p>Your order has been placed successfully. We have received your payment and will process your order shortly. If you have any questions, please contact our customer support.</p><p>Thank you for your purchase!</p>`;

        if (plan.user && plan.user.email) {
          await this.sendMailService.sendMail({
            to: plan.user.email,
            subject,
            html,
          });
        }

        await this.orderRepository.update(plan._id, {
          isPaid: true,
          status: "success",
        });

        // Clear cart if needed (optional, assuming cart clearing is desired)
        await this.cartRepository.delete({
          userID: plan.user._id
        });

        for (let i = 0; i < plan.products.length; i++) {
          const element = plan?.products[i];
          const transaction = await this.transactionRepository.create({

            amount: element?.price,
            reference: data?.reference,
            status: "active",
            productID: element?._id,
            userID: plan?.userID,
            metadata: element?.metadata,
            transactionType: "order",
            orderID: plan._id,

          });
          await this.transactionRepository.save(transaction);
        }
      }

      return { status: "success", message: "Webhook processed" };
    } catch (error) {
      console.error("Paystack Webhook Error:", error);
      throw new NotAcceptableException(error.message);
    }
  }
}
