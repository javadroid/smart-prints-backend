import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderSqlModel } from "@app/sql-schema/order.sql-schema";
import { PaystackService } from "@app/service/payment/paystack";
import { OrderDto, UserDTO } from "@app/dto";
import {
  getSqlMetadata,
  ObjectReturnType,
  serviceResponse,
  SendMailService,
} from "@app/service";
import { randomUUID } from "crypto";
import {
  CartSqlModel,
  DeliveryPriceSqlModel,
  PickupLocationSqlModel,
  ProductSqlModel,
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
    private sendMailService: SendMailService
  ) {}

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
          zone: order.orderDetails?.zone,
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
      const subject = "Order Confirmation";
      //  const text = `Hello ${userData.firstname},\n\nYour order has been placed successfully. We have received your payment and will process your order shortly. If you have any questions, please contact our customer support.\n\nThank you for your purchase!`;
       const html = `<p>Hello ${userData.firstname},</p><p>Your order has been placed successfully. Once payment is confirmed, we will process your order shortly. If you have any questions, please contact our customer support.</p><p>Thank you for your purchase!</p>`;

       await this.sendMailService.sendMail({
          to: userData.email,
          subject,
          // text,
          html,
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
      where: { [key]: value },
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

  async verifyOrderPayment(id: string): Promise<ObjectReturnType> {
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
        await this.orderRepository.update(id, {
          isPaid: true,
          status: "success",
        });
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
}
