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
import { CartSqlModel, CategoriesSqlModel, DesignSqlModel, OrderSqlModel, ProductSqlModel, UserSqlModel } from "@app/sql-schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { InjectRepository } from "@nestjs/typeorm";
import { Model } from "mongoose";
import { Repository } from "typeorm";

@Injectable()
export class AdminService {
  constructor(

   
    @InjectRepository(CartSqlModel)
    private cartModel: Repository<CartSqlModel>,
    @InjectRepository(CategoriesSqlModel)
    private categoriesModel: Repository<CategoriesSqlModel>,

    @InjectRepository(UserSqlModel) private userModel: Repository<UserSqlModel>,

    @InjectRepository(ProductSqlModel)
    private productModel: Repository<ProductSqlModel>,
    @InjectRepository(OrderSqlModel)
    private orderModel: Repository<OrderSqlModel>,
    @InjectRepository(DesignSqlModel)
    private designModel: Repository<DesignSqlModel>
  ) {}

  // admin dashboard stats, e.g. total users , total users that have succesfully placed an order , total orders by diffent status,  products, designs.
  async getDashboardStats() {
    const totalUsers = await this.userModel.count();
    const totalProducts = await this.productModel.count();
    const totalDesigns = await this.designModel.count();
    const totalOrders = await this.orderModel.count();
    const totalCarts = await this.cartModel.count();
    const totalCategories = await this.categoriesModel.count();
    const totalCompletedOrders = await this.orderModel
      .countBy( {   status: "completed" })
      ;
    const totalPendingOrders = await this.orderModel
      .countBy({ status: "pending" })
      ;
    const totalCancelledOrders = await this.orderModel
      .countBy({ status: "cancelled" })
      ;
    const totalUsersWithOrders = await this.orderModel
      .countBy({ status: "completed" })
      ;
    return  serviceResponse({  message: "Dashboard stats retrieved", status: true,
      data: {
      totalUsers,
      totalProducts,
      totalDesigns,
      totalOrders,
      totalCarts,
      totalCategories,
      totalCompletedOrders,
      totalPendingOrders,
      totalCancelledOrders,
      totalUsersWithOrders: totalUsersWithOrders,}
   });

  return {}
  }
}
