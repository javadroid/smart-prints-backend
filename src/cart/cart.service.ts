// import { Injectable } from '@nestjs/common';
// import { CartModel, CartDoc } from '@app/schema';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { CartDto,  } from '@app/dto';
// import { ObjectReturnType, serviceResponse, getMetadata } from '@app/service';

// @Injectable()
export class CartService {
//   constructor(
//     @InjectModel(CartModel.name)
//     private cartModel: Model<CartDoc>,
//   ) {}

//   async upset(createCartDto: CartDto, userData: any): Promise<ObjectReturnType> {

//     const created = await this.cartModel.create({ ...createCartDto, userID: userData._id.toString() });
//     return serviceResponse({ data: created, message: 'Cart created', status: true });
//   }

//   async findAll(query: any): Promise<ObjectReturnType> {
//     const { limit = 10, page = 1 } = query;
//     const skip = (page - 1) * limit;

//     const carts = await this.cartModel
//       .find()
//       .skip(skip)
//       .limit(limit)
//       .sort({ createdAt: -1 })
//       .exec();

//     return serviceResponse({ data: carts, message: 'Carts retrieved', status: true, metadata: await getMetadata({ model: this.cartModel, query, querys: {} }) });
//   }

//   async findByUser(userID: string): Promise<ObjectReturnType> {
//     const cart = await this.cartModel.find({ userID }).populate("productID").exec();
//     return serviceResponse({ data: cart, message: 'Cart retrieved', status: true });
//   }

//   async update(id: string, updateCartDto: CartDto): Promise<ObjectReturnType> {
//     const updated = await this.cartModel.findByIdAndUpdate(id, updateCartDto, { new: true }).exec();
//     if (!updated) return serviceResponse({ message: 'Cart not found', status: false });
//     return serviceResponse({ data: updated, message: 'Cart updated', status: true });
//   }

//   async delete(ids: string): Promise<ObjectReturnType> {
//     const result = await this.cartModel.findByIdAndDelete(ids);
//     if (!result) return serviceResponse({ message: 'No carts deleted', status: false });
//     return serviceResponse({ message: `Cart deleted`,  status: true });
//   }

//   //clear user cart
//   async clearUserCart(userID: string): Promise<ObjectReturnType> {
//     const result = await this.cartModel.deleteMany({ userID });
//     if (result.deletedCount === 0) return serviceResponse({ message: 'No carts deleted', status: false });
//     return serviceResponse({ message: `${result.deletedCount} cart(s) deleted`, status: true });
// }

}
