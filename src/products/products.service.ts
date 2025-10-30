// import { Injectable, NotFoundException } from "@nestjs/common";
// import { ProductModel, ProductDoc, FarmModel, FarmDoc } from "@app/schema";
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from "mongoose";
// import { ProductDto, UserDTO } from "@app/dto";
// import { ObjectReturnType, serviceResponse, getMetadata } from "@app/service";

// @Injectable()
export class ProductService {
//   constructor(
//     @InjectModel(ProductModel.name)
//     private productModel: Model<ProductDoc>
//   ) //     @InjectModel(FarmModel.name)
//   // private framModel: Model<FarmDoc>,

//   {}
//   async upset(
//     createProductDto: ProductDto,
//     userData: UserDTO
//   ): Promise<ObjectReturnType> {
//     //check if farm exists
//     //   const farm = await this.framModel.findOne({ _id: createProductDto.farmID, userID: userData._id.toString() });
//     //   if (!farm) {
//     //  throw  new NotFoundException('Farm not found or you do not have permission to add products to this farm');
//     //   }
//     const created = await this.productModel.create(createProductDto);
//     return serviceResponse({
//       data: created,
//       message: "Product plan created successfully",

//       status: true,
//     });
//   }

//   async findAll(query: any): Promise<ObjectReturnType> {
//     const { limit = 10, page = 1 } = query;
//     const skip = (page - 1) * limit;
  
//     const plans = await this.productModel
//       .find()
//       .skip(skip)
//       .limit(limit)
//       .sort({ createdAt: -1 })
//       .exec();
//     return serviceResponse({
//       data: plans,
//       message: "Product plans retrieved successfully",
//       status: true,
//       metadata: await getMetadata({
//         model: this.productModel,
//         query,
//         querys: {},
//       }),
//     });
//   }
//   async findOne(id: string): Promise<ObjectReturnType> {
//     try {
//       const plan = await this.productModel.findById(id).exec();

//       return serviceResponse({
//         data: plan,
//         message: "Product plan retrieved successfully",
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

//     const plans = await this.productModel
//       .find({ [key]: value })
//       .skip(skip)
//       .limit(limit)
//       .sort({ createdAt: -1 })
//       .exec();
//     return serviceResponse({
//       data: plans,
//       message: "Product plans retrieved successfully",
//       status: true,
//       metadata: await getMetadata({
//         model: this.productModel,
//         query,
//         querys: { [key]: value },
//       }),
//     });
//   }
// //find by any
//   async findByMany(
//     body: ProductDto,
//     query: any
//   ): Promise<ObjectReturnType> {
    
//     const { limit = 20, page = 1 } = query;
//     const skip = (page - 1) * limit;

//     const plans = await this.productModel
//       .find(body)
//       .skip(skip)
//       .limit(limit)
//       .sort({ createdAt: -1 })
//       .exec();
//     return serviceResponse({
//       data: plans,
//       message: "Product plans retrieved successfully",
//       status: true,
//       metadata: await getMetadata({
//         model: this.productModel,
//         query,
//         querys: { body },
//       }),
//     });
//   }
//   //edit
//   async update(
//     id: string,
//     updateProductDto: ProductDto,
//     userData: UserDTO
//   ): Promise<ObjectReturnType> {
//     try {
//       const updated = await this.productModel
//         .findByIdAndUpdate(id, updateProductDto, {
//           new: true,
//         })
//         .exec();

//       if (!updated) {
//         return serviceResponse({
//           message: "Product plan not found",
//           status: false,
//         });
//       }

//       return serviceResponse({
//         data: updated,
//         message: "Product plan updated successfully",
//         status: true,
//       });
//     } catch (error) {
//       return serviceResponse({
//         message: error.message,
//         status: false,
//       });
//     }
//   }

//   async delete(ids: string, userData: UserDTO): Promise<ObjectReturnType> {
//     try {
//       const result = await this.productModel.findByIdAndDelete(ids);

     

//       return serviceResponse({
//         message: `product deleted successfully`,
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
