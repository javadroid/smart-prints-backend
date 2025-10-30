import {
  CartModel,
  CartDoc,
  CategoriesDoc,
  CategoriesModel,
  DesignDoc,
  DesignModel,
  OrderDoc,
  OrderModel,
  ProductDoc,
  ProductModel,
  UserDoc,
  UserModel,
} from "@app/schema";
import { NotificationService, serviceResponse } from "@app/service";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class AdminService {
  constructor(
    // @InjectModel(CartModel.name)
    // private cartModel: Model<CartDoc>,
    // @InjectModel(CategoriesModel.name)
    // private categoriesModel: Model<CategoriesDoc>,
    // private notificationActivity: NotificationService,
    // @InjectModel(UserModel.name) private userModel: Model<UserDoc>,

    // @InjectModel(ProductModel.name)
    // private productModel: Model<ProductDoc>,
    // @InjectModel(OrderModel.name)
    // private orderModel: Model<OrderDoc>,
    // @InjectModel(DesignModel.name)
    // private designModel: Model<DesignDoc>
  ) {}

  // admin dashboard stats, e.g. total users , total users that have succesfully placed an order , total orders by diffent status,  products, designs.
  async getDashboardStats() {
  //   const totalUsers = await this.userModel.countDocuments().exec();
  //   const totalProducts = await this.productModel.countDocuments().exec();
  //   const totalDesigns = await this.designModel.countDocuments().exec();
  //   const totalOrders = await this.orderModel.countDocuments().exec();
  //   const totalCarts = await this.cartModel.countDocuments().exec();
  //   const totalCategories = await this.categoriesModel.countDocuments().exec();
  //   const totalCompletedOrders = await this.orderModel
  //     .countDocuments({ status: "completed" })
  //     .exec();
  //   const totalPendingOrders = await this.orderModel
  //     .countDocuments({ status: "pending" })
  //     .exec();
  //   const totalCancelledOrders = await this.orderModel
  //     .countDocuments({ status: "cancelled" })
  //     .exec();
  //   const totalUsersWithOrders = await this.orderModel
  //     .distinct("userID")
  //     .exec();
  //   return  serviceResponse({  message: "Dashboard stats retrieved", status: true,
  //     data: {
  //     totalUsers,
  //     totalProducts,
  //     totalDesigns,
  //     totalOrders,
  //     totalCarts,
  //     totalCategories,
  //     totalCompletedOrders,
  //     totalPendingOrders,
  //     totalCancelledOrders,
  //     totalUsersWithOrders: totalUsersWithOrders.length,}
  //  });

  return {}
  }
}
