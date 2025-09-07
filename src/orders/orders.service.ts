import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderModel, OrderDoc, FarmModel, FarmDoc } from '@app/schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto, UserDTO } from '@app/dto';
import { ObjectReturnType, serviceResponse, getMetadata } from '@app/service';

@Injectable()
export class OrderService {
 constructor(
    @InjectModel(OrderModel.name)
    private orderModel: Model<OrderDoc>,
    //     @InjectModel(FarmModel.name)
    // private framModel: Model<FarmDoc>,
  
  ){

 }
  async upset(
    createOrderDto: OrderDto,
    userData: UserDTO
  ): Promise<ObjectReturnType> {
    //check if farm exists
  //   const farm = await this.framModel.findOne({ _id: createOrderDto.farmID, userID: userData._id.toString() });
  //   if (!farm) {
  //  throw  new NotFoundException('Farm not found or you do not have permission to add orders to this farm');
  //   }
    const created = await this.orderModel.create({ ...createOrderDto, userID: userData._id.toString() });
    return serviceResponse({
      data: created,
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
      const plan = await this.orderModel.findById(id).exec();

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
    const { key, value } = params;
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;

    const plans = await this.orderModel
      .find({ [key]: value })
      .skip(skip)
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
        querys: { [key]: value },
      }),
    });
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

    async delete(ids: string[], userData: UserDTO): Promise<ObjectReturnType> {
    try {
      
      const result = await this.orderModel.deleteMany({
        _id: { $in: ids },
      });

      if (result.deletedCount === 0) {
        return serviceResponse({
          message: "No order plans found to delete",
          status: false,
        });
      }

      return serviceResponse({
        message: `${result.deletedCount} order plans deleted successfully`,
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: error.message,
        status: false,
      });
    }
  }

}
