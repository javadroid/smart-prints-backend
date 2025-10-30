import { Injectable, NotFoundException } from "@nestjs/common";
import { OrderModel, OrderDoc, FarmModel, FarmDoc } from "@app/schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OrderDto, UserDTO } from "@app/dto";
import {
  ObjectReturnType,
  serviceResponse,
  getMetadata,
  FlutterwaveService,
} from "@app/service";
import { randomUUID } from "crypto";
import e from "express";
import { PaystackService } from "@app/service/payment/paystack";

@Injectable()
export class OrderService {
//   constructor(
//     @InjectModel(OrderModel.name)
//     private orderModel: Model<OrderDoc>,
//     private flutterwave: FlutterwaveService,
//     private paystack: PaystackService
//   ) {}
//   async upset(
//     createOrderDto: OrderDto,
//     userData: UserDTO
//   ): Promise<ObjectReturnType> {
//     const tx_ref = `smartprints-${userData.id}-${randomUUID()
//       .replace(/\D/g, "")
//       .substring(0, 10)}`;
//     const created = new this.orderModel({
//       ...createOrderDto,
//       tx_ref,
//       userID: userData._id.toString(),
//     });

//     const paymentrequest = {
//       amount: createOrderDto.totalPrice,
//       currency: "NGN",
//       email: userData.email,
//       callback_url:
//         "https://smart-prints-custom-apparel.onrender.com/order-success/" +
//         created._id.toString(),
//       metadata: {
//         tx_ref,
//         userId: userData._id.toString(),
//       },
//     };
//     const payment = await this.paystack.createPaymentLink(paymentrequest);
//     console.log(payment);

//     created.paystackRef = payment.data.reference;
//     created.authorization_url = payment.data.authorization_url;
//     created.accessCode = payment.data.access_code;
//     await created.save();
//     return serviceResponse({
//       data: payment.data.authorization_url,
//       message: "Order plan created successfully",

//       status: true,
//     });
//   }

//   async findAll(query: any): Promise<ObjectReturnType> {
//     const { limit = 10, page = 1 } = query;
//     const skip = (page - 1) * limit;

//     const plans = await this.orderModel
//       .find()
//       .skip(skip)
//       .populate("userID")
//       .populate("products.productID")
//       .limit(limit)
//       .sort({ createdAt: -1 })
//       .exec();
//     return serviceResponse({
//       data: plans,
//       message: "Order plans retrieved successfully",
//       status: true,
//       metadata: await getMetadata({
//         model: this.orderModel,
//         query,
//         querys: {},
//       }),
//     });
//   }
//   async findOne(id: string): Promise<ObjectReturnType> {
//     try {
//       const plan = await this.orderModel
//         .findById(id)
//         .populate("userID")
//         .populate("products.productID")
//         .exec();

//       return serviceResponse({
//         data: plan,
//         message: "Order plan retrieved successfully",
//         status: true,
//       });
//     } catch (error) {}
//   }
//   async verifyOrderPayment(id: string): Promise<ObjectReturnType> {
//     try {
//       const plan = await this.orderModel
//         .findById(id)
//         .populate("userID")
//         .populate("products.productID")
//         .exec();
//       if (!plan) {
//         throw new NotFoundException("Order not found");
//       }
//       if (!plan.paystackRef) {
//         throw new NotFoundException(
//           "No payment reference found for this order"
//         );
//       }
//       if (plan.isPaid) {
//         return serviceResponse({
//           data: plan,
//           message: "Order already paid",
//           status: true,
//         });
//       }
//       const v = await this.paystack.verifyPaymentLink(plan.paystackRef);
//       if (v.data.status === "success") {
//         plan.isPaid = true;
//         plan.status = "paid";
//         await plan.save();
//       } else if ( ["abandoned","ongoing"].includes(v.data.status)) {
//         plan.isPaid = false;
//         plan.status = "abandoned";
//         await plan.save();
//       } else {
//         plan.isPaid = false;
//         plan.status = "cancelled";
//         await plan.save();
//       }
//       console.log(v);
//       return serviceResponse({
//         data: plan,
//         message: "Order plan retrieved successfully",
//         status: true,
//       });
//     } catch (error) {
//       throw new NotFoundException(error.message);
//     }
//   }

//   //find by any
//   async findByAny(
//     params: { key: string; value: string },
//     query: any
//   ): Promise<ObjectReturnType> {
//     try {
//       const { key, value } = params;
//       const { limit = 10, page = 1 } = query;
//       const skip = (page - 1) * limit;

//       const orders = await this.orderModel
//         .find({ [key]: value })
//         .skip(skip)
//         .limit(limit)
//         .populate("userID")
//         .populate("products.productID")
//         .sort({ createdAt: -1 })
//         .exec();

//       return serviceResponse({
//         data: orders,
//         message: "Order plans retrieved successfully",
//         status: true,
//         metadata: await getMetadata({
//           model: this.orderModel,
//           query,
//           querys: { [key]: value },
//         }),
//       });
//     } catch (error) {
//       throw new NotFoundException(error.message);
//     }
//   }

//   //edit
//   async update(
//     id: string,
//     updateOrderDto: OrderDto,
//     userData: UserDTO
//   ): Promise<ObjectReturnType> {
//     try {
//       const updated = await this.orderModel
//         .findByIdAndUpdate(id, updateOrderDto, {
//           new: true,
//         })
//         .exec();

//       if (!updated) {
//         return serviceResponse({
//           message: "Order plan not found",
//           status: false,
//         });
//       }

//       return serviceResponse({
//         data: updated,
//         message: "Order plan updated successfully",
//         status: true,
//       });
//     } catch (error) {
//       return serviceResponse({
//         message: error.message,
//         status: false,
//       });
//     }
//   }

//   async delete(id: string): Promise<ObjectReturnType> {
//     const result = await this.orderModel.findByIdAndDelete(id);
//     if (!result)
//       return serviceResponse({ message: "No orders deleted", status: false });
//     return serviceResponse({ message: `Order deleted`, status: true });
//   }
}
