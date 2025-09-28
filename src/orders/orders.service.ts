import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderModel, OrderDoc, FarmModel, FarmDoc } from '@app/schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto, UserDTO } from '@app/dto';
import { ObjectReturnType, serviceResponse, getMetadata, FlutterwaveService } from '@app/service';
import { randomUUID } from 'crypto';
import e from 'express';

@Injectable()
export class OrderService {
 constructor(
    @InjectModel(OrderModel.name)
    private orderModel: Model<OrderDoc>,
   private flutterwave: FlutterwaveService,
  
  ){

 }
  async upset(
    createOrderDto: OrderDto,
    userData: UserDTO
  ): Promise<ObjectReturnType> {
     const tx_ref=`smartprints-${userData.id}-${randomUUID().replace(/\D/g, "").substring(0, 10)}`
     const created = new this.orderModel({ ...createOrderDto,tx_ref, userID: userData._id.toString() });
  
  const paymentrequest={
    amount:createOrderDto.totalPrice,
    currency:"NGN",
   tx_ref,
    redirect_url:"http://localhost:5173/#/order-success/"+created._id.toString(),
    payment_options:"card,banktransfer,ussd",
    customer:{
      phonenumber:userData.phone,
      name:userData.fullname??userData.username??userData.firstname??createOrderDto.fullName,
      email:userData.email
    },
    customizations:{
      title:"Smart Prints",
      logo:"https://smartprints.vercel.app/logo.png",
      description:"Order Payment"
    }
  }
 const payment = await this.flutterwave.initiateCheckout(paymentrequest);
 console.log(payment,payment.data.link.split("pay/")[1])

 created.flutterwaveRef = payment.data.link.split("pay/")[1] ;
 await created.save();
     return serviceResponse({
      data: payment.data.link,
      message: "Order plan created successfully",

      status: true,
    });
  }

  async findAll(query: any): Promise<ObjectReturnType> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;

    const plans = await this.orderModel
      .find()
      .skip(skip)
      .populate("userID")
     .populate("products.productID")
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    return serviceResponse({
      data: plans,
      message: "Order plans retrieved successfully",
      status: true,
      metadata: await getMetadata({
        model: this.orderModel,
        query,
        querys: {},
      }),
    });
  }
  async findOne(id: string): Promise<ObjectReturnType> {
    try {
      const plan = await this.orderModel.findById(id).populate("userID")
     .populate("products.productID").exec();

      return serviceResponse({
        data: plan,
        message: "Order plan retrieved successfully",
        status: true,
      });
    } catch (error) {}
  }

  //find by any
  async findByAny(
    params: { key: string; value: string },
    query: any
  ): Promise<ObjectReturnType> {

    try {
      const { key, value } = params;
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;


    const orders = await this.orderModel
      .find({ [key]: value })
      .skip(skip)
      .limit(limit)
      .populate("userID")
     .populate("products.productID")
      .sort({ createdAt: -1 })
      .exec();

      if(['_id'] .includes(key)){
        
        console.log(orders[0].tx_ref)
 const v= await this.flutterwave.verifyCheckout(orders[0].tx_ref);
 console.log(v)
}
    return serviceResponse({
      data: orders,
      message: "Order plans retrieved successfully",
      status: true,
      metadata: await getMetadata({
        model: this.orderModel,
        query,
        querys: { [key]: value },
      }),
    });
    } catch (error) {
   throw new NotFoundException(error.message);
    }
    
  }

  //edit
  async update(
    id: string,
    updateOrderDto: OrderDto,
    userData: UserDTO
  ): Promise<ObjectReturnType> {
    try {
      const updated = await this.orderModel
        .findByIdAndUpdate(id, updateOrderDto, {
          new: true,
        })
        .exec();

      if (!updated) {
        return serviceResponse({
          message: "Order plan not found",
          status: false,
        });
      }

      return serviceResponse({
        data: updated,
        message: "Order plan updated successfully",
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: error.message,
        status: false,
      });
    }
  }

  async delete(id: string): Promise<ObjectReturnType> {
    const result = await this.orderModel.findByIdAndDelete(id);
    if (!result)
      return serviceResponse({ message: "No orders deleted", status: false });
    return serviceResponse({ message: `Order deleted`, status: true });
  }

}
