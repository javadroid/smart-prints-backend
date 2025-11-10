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
import {
  CartSqlModel,
  CategoriesSqlModel,
  DesignSqlModel,
  OrderSqlModel,
  ProductSqlModel,
  UserSqlModel,
  DeliveryPriceSqlModel,
} from "@app/sql-schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { InjectRepository } from "@nestjs/typeorm";
import { Model } from "mongoose";
import { Repository } from "typeorm";
import { DeliveryPriceDTO } from "@app/dto";

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
    private designModel: Repository<DesignSqlModel>,
    @InjectRepository(DeliveryPriceSqlModel)
    private deliveryPriceModel: Repository<DeliveryPriceSqlModel>
  ) {}

  // admin dashboard stats, e.g. total users , total users that have succesfully placed an order , total orders by diffent status,  products, designs.
  async getDashboardStats() {
    const totalUsers = await this.userModel.count();
    const totalProducts = await this.productModel.count();
    const totalDesigns = await this.designModel.count();
    const totalOrders = await this.orderModel.count();
    const totalCarts = await this.cartModel.count();
    const totalCategories = await this.categoriesModel.count();
    const totalCompletedOrders = await this.orderModel.countBy({
      status: "completed",
    });
    const totalPendingOrders = await this.orderModel.countBy({
      status: "pending",
    });
    const totalCancelledOrders = await this.orderModel.countBy({
      status: "cancelled",
    });
    const totalUsersWithOrders = await this.orderModel.countBy({
      status: "completed",
    });
    return serviceResponse({
      message: "Dashboard stats retrieved",
      status: true,
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
        totalUsersWithOrders: totalUsersWithOrders,
      },
    });

    return {};
  }

async createDeliveryPrice(deliveryPriceDto: DeliveryPriceDTO) {
  try {
    const deliveryPrice = this.deliveryPriceModel.create({
      country: deliveryPriceDto.country,
      state: deliveryPriceDto.state,
      lga: deliveryPriceDto.lga,
      deliveryFee: deliveryPriceDto.deliveryFee,
      additionalFee: deliveryPriceDto.additionalFee,
    });

    // Perform the upsert operation. TypeORM handles both insert or update
    const result = await this.deliveryPriceModel.upsert(deliveryPrice, ["country", "state", "lga"]);

    // `upsert` returns an InsertResult; you need to retrieve the inserted or updated entity from it
    const updatedDeliveryPrice = result.generatedMaps[0]; // or result.raw[0] depending on your TypeORM version

    return serviceResponse({
      message:  'successfully' ,
      status: true,
      data: updatedDeliveryPrice,
    });

  } catch (error) {
    console.error('Error creating or updating delivery price:', error);
    return serviceResponse({
      message: 'Error occurred while processing delivery price',
      status: false,
      data: null,
    });
  }
}



  async getDeliveryPrices(country?: string, state?: string, lga?: string) {
    const where: any = {};
    if (country) where.country = country;
    if (state) where.state = state;
    if (lga) where.lga = lga;

    const deliveryPrices = await this.deliveryPriceModel.find({ where });
    return serviceResponse({
      message: "Delivery prices retrieved successfully",
      status: true,
      data: deliveryPrices,
    });
  }

  async deleteDeliveryPrice(id: string) {
    const result = await this.deliveryPriceModel.delete(id);
    if (result.affected === 0) {
      return serviceResponse({
        message: "Delivery price not found",
        status: false,
      });
    }
    return serviceResponse({
      message: "Delivery price deleted successfully",
      status: true,
    });
  }
}
