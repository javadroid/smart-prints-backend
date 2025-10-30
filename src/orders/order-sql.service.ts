import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderSqlModel } from "@app/sql-schema/order.sql-schema";
import { PaystackService } from "@app/service/payment/paystack";
import { OrderDto, UserDTO } from "@app/dto";
import { getSqlMetadata, ObjectReturnType, serviceResponse } from "@app/service";
import { randomUUID } from "crypto";

@Injectable()
export class OrderSqlService {
  constructor(
    @InjectRepository(OrderSqlModel)
    private readonly orderRepository: Repository<OrderSqlModel>,
    private paystack: PaystackService
  ) {}

  async create(order: OrderDto, userData: UserDTO): Promise<ObjectReturnType> {
    const tx_ref = `smartprints-${userData.id}-${randomUUID()
      .replace(/\D/g, "")
      .substring(0, 10)}`;

    const newOrder = this.orderRepository.create({
      ...order,
      tx_ref,
      userID: userData._id.toString(),
    });
    const created = await this.orderRepository.save(newOrder);

    const paymentrequest = {
      amount: created.totalPrice,
      currency: "NGN",
      email: userData.email,
      callback_url:
        "https://smart-prints-custom-apparel.onrender.com/order-success/" +
        created._id.toString(),
      metadata: {
        tx_ref,
        userId: userData._id.toString(),
      },
    };

    const payment = await this.paystack.createPaymentLink(paymentrequest);
    console.log(payment);

    await this.orderRepository.update(created._id.toString(), {
      paystackRef: created.paystackRef,
      authorization_url: created.authorization_url,
      accessCode: created.accessCode,
    });
    return serviceResponse({
      data: payment.data.authorization_url,
      message: "Order plan created successfully",

      status: true,
    });
  }

  async findAll(query): Promise<ObjectReturnType> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const data=await this.orderRepository.find({
      take: limit,
      skip: skip,
      relations: ['user', 'products','products.product'],
    });
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

  async findByAny(params:any, query:any): Promise<ObjectReturnType> {
    const {key,value}=params
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const data=await this.orderRepository.find({where:{[key]:value}, take: limit, skip: skip,relations: ['user', 'products','products.product'], });
    return serviceResponse({
      data,
      message: "Orders retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.orderRepository,
        query,
        querys:{[key]:value},
      }),
    });
  
  }

  async update(id: string, order: OrderDto): Promise<OrderSqlModel> {
    await this.orderRepository.update(id, order);
    return this.orderRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }

  async verifyOrderPayment(id: string): Promise<ObjectReturnType> {
    try {
      const plan = await this.orderRepository.findOne({
        where: { _id: id },
        relations: ["user", "products",'products.product'],
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
      } else {
        await this.orderRepository.update(id, {
          isPaid: false,
          status: "cancelled",
        });
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
