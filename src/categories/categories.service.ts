import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesModel, CategoriesDoc, FarmModel, FarmDoc } from '@app/schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriesDto, UserDTO } from '@app/dto';
import { ObjectReturnType, serviceResponse, getMetadata } from '@app/service';

@Injectable()
export class CategoriesService {
//  constructor(
//     @InjectModel(CategoriesModel.name)
//     private categoriesModel: Model<CategoriesDoc>,
//     //     @InjectModel(FarmModel.name)
//     // private framModel: Model<FarmDoc>,
  
//   ){

//  }
//   async upset(
//     createCategoriesDto: CategoriesDto,
//     userData: UserDTO
//   ): Promise<ObjectReturnType> {
//     //check if farm exists
//   //   const farm = await this.framModel.findOne({ _id: createCategoriesDto.farmID, userID: userData._id.toString() });
//   //   if (!farm) {
//   //  throw  new NotFoundException('Farm not found or you do not have permission to add categoriess to this farm');
//   //   }
//     const created = await this.categoriesModel.create({ ...createCategoriesDto, userID: userData._id.toString() });
//     return serviceResponse({
//       data: created,
//       message: "Categories plan created successfully",

//       status: true,
//     });
//   }

//   async findAll(query: any): Promise<ObjectReturnType> {
//     const { limit = 10, page = 1 } = query;
//     const skip = (page - 1) * limit;

//     const plans = await this.categoriesModel
//       .find()
//       .skip(skip)
//       .limit(limit)
//       .sort({ createdAt: -1 })
//       .exec();
//     return serviceResponse({
//       data: plans,
//       message: "Categories plans retrieved successfully",
//       status: true,
//       metadata: await getMetadata({
//         model: this.categoriesModel,
//         query,
//         querys: {},
//       }),
//     });
//   }
//   async findOne(id: string): Promise<ObjectReturnType> {
//     try {
//       const plan = await this.categoriesModel.findById(id).exec();

//       return serviceResponse({
//         data: plan,
//         message: "Categories plan retrieved successfully",
//         status: true,
//       });
//     } catch (error) {}
//   }

//   //find by any
//   async findByAny(
//     params: { key: string; value: string },
//     query: any
//   ): Promise<ObjectReturnType> {
//     const { key, value } = params;
//     const { limit = 10, page = 1 } = query;
//     const skip = (page - 1) * limit;

//     const plans = await this.categoriesModel
//       .find({ [key]: value })
//       .skip(skip)
//       .limit(limit)
//       .sort({ createdAt: -1 })
//       .exec();
//     return serviceResponse({
//       data: plans,
//       message: "Categories plans retrieved successfully",
//       status: true,
//       metadata: await getMetadata({
//         model: this.categoriesModel,
//         query,
//         querys: { [key]: value },
//       }),
//     });
//   }

//   //edit
//   async update(
//     id: string,
//     updateCategoriesDto: CategoriesDto,
//     userData: UserDTO
//   ): Promise<ObjectReturnType> {
//     try {
//       const updated = await this.categoriesModel
//         .findByIdAndUpdate(id, updateCategoriesDto, {
//           new: true,
//         })
//         .exec();

//       if (!updated) {
//         return serviceResponse({
//           message: "Categories plan not found",
//           status: false,
//         });
//       }

//       return serviceResponse({
//         data: updated,
//         message: "Categories plan updated successfully",
//         status: true,
//       });
//     } catch (error) {
//       return serviceResponse({
//         message: error.message,
//         status: false,
//       });
//     }
//   }

//     async delete(ids: string[], userData: UserDTO): Promise<ObjectReturnType> {
//     try {
      
//       const result = await this.categoriesModel.deleteMany({
//         _id: { $in: ids },
//       });

//       if (result.deletedCount === 0) {
//         return serviceResponse({
//           message: "No categories plans found to delete",
//           status: false,
//         });
//       }

//       return serviceResponse({
//         message: `${result.deletedCount} categories plans deleted successfully`,
//         status: true,
//       });
//     } catch (error) {
//       return serviceResponse({
//         message: error.message,
//         status: false,
//       });
//     }
//   }

}
