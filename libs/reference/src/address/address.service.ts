import { Injectable, NotFoundException } from '@nestjs/common';
import { AddressModel, AddressDoc, FarmModel, FarmDoc } from '@app/schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddressDto, UserDTO } from '@app/dto';
import { ObjectReturnType, serviceResponse, getMetadata } from '@app/service';

@Injectable()
export class AddressService {
 constructor(
    @InjectModel(AddressModel.name)
    private addressModel: Model<AddressDoc>,
    //     @InjectModel(FarmModel.name)
    // private framModel: Model<FarmDoc>,
  
  ){

 }
  async upset(
    createAddressDto: AddressDto,
    userData: UserDTO
  ): Promise<ObjectReturnType> {
    //check if farm exists
  //   const farm = await this.framModel.findOne({ _id: createAddressDto.farmID, userID: userData._id.toString() });
  //   if (!farm) {
  //  throw  new NotFoundException('Farm not found or you do not have permission to add addresss to this farm');
  //   }
    const created = await this.addressModel.create({ ...createAddressDto, userID: userData._id.toString() });
    return serviceResponse({
      data: created,
      message: "Address plan created successfully",

      status: true,
    });
  }

  async findAll(query: any): Promise<ObjectReturnType> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;

    const plans = await this.addressModel
      .find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    return serviceResponse({
      data: plans,
      message: "Address plans retrieved successfully",
      status: true,
      metadata: await getMetadata({
        model: this.addressModel,
        query,
        querys: {},
      }),
    });
  }
  async findOne(id: string): Promise<ObjectReturnType> {
    try {
      const plan = await this.addressModel.findById(id).exec();

      return serviceResponse({
        data: plan,
        message: "Address plan retrieved successfully",
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

    const plans = await this.addressModel
      .find({ [key]: value })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    return serviceResponse({
      data: plans,
      message: "Address plans retrieved successfully",
      status: true,
      metadata: await getMetadata({
        model: this.addressModel,
        query,
        querys: { [key]: value },
      }),
    });
  }

  //edit
  async update(
    id: string,
    updateAddressDto: AddressDto,
    userData: UserDTO
  ): Promise<ObjectReturnType> {
    try {
      const updated = await this.addressModel
        .findByIdAndUpdate(id, updateAddressDto, {
          new: true,
        })
        .exec();

      if (!updated) {
        return serviceResponse({
          message: "Address plan not found",
          status: false,
        });
      }

      return serviceResponse({
        data: updated,
        message: "Address plan updated successfully",
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
      
      const result = await this.addressModel.deleteMany({
        _id: { $in: ids },
      });

      if (result.deletedCount === 0) {
        return serviceResponse({
          message: "No address plans found to delete",
          status: false,
        });
      }

      return serviceResponse({
        message: `${result.deletedCount} address plans deleted successfully`,
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
