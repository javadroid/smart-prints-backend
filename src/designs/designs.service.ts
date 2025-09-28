import { Injectable, NotFoundException } from '@nestjs/common';
import { DesignModel, DesignDoc, FarmModel, FarmDoc } from '@app/schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DesignDto, UserDTO } from '@app/dto';
import { ObjectReturnType, serviceResponse, getMetadata } from '@app/service';

@Injectable()
export class DesignService {
 constructor(
    @InjectModel(DesignModel.name)
    private designModel: Model<DesignDoc>,
    //     @InjectModel(FarmModel.name)
    // private framModel: Model<FarmDoc>,
  
  ){

 }
  async upset(
    createDesignDto: DesignDto,
    userData: UserDTO
  ): Promise<ObjectReturnType> {
    //check if farm exists
  //   const farm = await this.framModel.findOne({ _id: createDesignDto.farmID, userID: userData._id.toString() });
  //   if (!farm) {
  //  throw  new NotFoundException('Farm not found or you do not have permission to add designs to this farm');
  //   }
    const created = await this.designModel.create({ ...createDesignDto, userID: userData._id.toString() });
    return serviceResponse({
      data: created,
      message: "Design plan created successfully",

      status: true,
    });
  }

  async findAll(query: any): Promise<ObjectReturnType> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;

    const plans = await this.designModel
      .find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    return serviceResponse({
      data: plans,
      message: "Design plans retrieved successfully",
      status: true,
      metadata: await getMetadata({
        model: this.designModel,
        query,
        querys: {},
      }),
    });
  }
  async findOne(id: string): Promise<ObjectReturnType> {
    try {
      const plan = await this.designModel.findById(id).exec();

      return serviceResponse({
        data: plan,
        message: "Design plan retrieved successfully",
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

    const plans = await this.designModel
      .find({ [key]: value })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    return serviceResponse({
      data: plans,
      message: "Design plans retrieved successfully",
      status: true,
      metadata: await getMetadata({
        model: this.designModel,
        query,
        querys: { [key]: value },
      }),
    });
  }

  //edit
  async update(
    id: string,
    updateDesignDto: DesignDto,
    userData: UserDTO
  ): Promise<ObjectReturnType> {
    try {
      const updated = await this.designModel
        .findByIdAndUpdate(id, updateDesignDto, {
          new: true,
        })
        .exec();

      if (!updated) {
        return serviceResponse({
          message: "Design plan not found",
          status: false,
        });
      }

      return serviceResponse({
        data: updated,
        message: "Design plan updated successfully",
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: error.message,
        status: false,
      });
    }
  }

  async delete(ids: string): Promise<ObjectReturnType> {
    const result = await this.designModel.findByIdAndDelete(ids);
    if (!result) return serviceResponse({ message: 'No designs deleted', status: false });
    return serviceResponse({ message: `Design deleted`,  status: true });
  }

  //search by tags
  async searchByTags(tag: string, query: any): Promise<ObjectReturnType> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const plans = await this.designModel
        .find({ tags: { $regex: new RegExp(tag, 'i') } })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    return serviceResponse({
      data: plans,
      message: "Design plans retrieved successfully",
      status: true,
      metadata: await getMetadata({
        model: this.designModel,
        query,
        querys: { tags: tag },
      }),
    });
  }
}





