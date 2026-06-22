import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, In, Brackets, Not } from "typeorm";
import { ProductSqlModel } from "@app/sql-schema/product.sql-schema";
import { getSqlMetadata, serviceResponse } from "@app/service";
import { UserDTO } from "@app/dto";
import { UserSqlModel } from "@app/sql-schema";

@Injectable()
export class ProductSqlService {
  constructor(
    @InjectRepository(ProductSqlModel)
    private readonly productRepository: Repository<ProductSqlModel>,
    @InjectRepository(UserSqlModel)
    private readonly userRepository: Repository<UserSqlModel>,
  ) { }

  async create(product: Partial<ProductSqlModel>, userData: UserDTO): Promise<any> {
    if (product.type == "custom" && !userData.isAdmin) {
      throw new NotAcceptableException("You are not authorized to create custom products");
    }

    const newProduct = this.productRepository.create({ ...product, userID: userData._id.toString(), status: "active" });
    const data = await this.productRepository.save(newProduct);
    return serviceResponse({
      data,
      message: "Product plan created successfully",

      status: true,
    });
  }
  async findByAny(param: any, query: any): Promise<any> {
    const { key, value } = param
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const findall = await this.productRepository.find({ where: { [key]: value, }, take: limit, skip: skip, relations: ['user', 'product'], });
    return serviceResponse({
      data: findall,
      message: "Product plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.productRepository,
        query,
        querys: { [key]: value },
      }),
    });
  }



  async findByMany(param: any, query: any): Promise<any> {

    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    console.log(param)
    param.isActive = true

    const findall = await this.productRepository.find({
      where: param,
      take: limit,

      skip: skip,
      relations: ['user', 'product'],
    });
    return serviceResponse({
      data: findall,
      message: "Product plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.productRepository,
        query,
        querys: param,
      }),
    });
  }
  async findByManyAll(param: any, query: any): Promise<any> {

    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    console.log(param)
    param.isActive = true

    const findall = await this.productRepository.find({
      where: [
        {
          status: "active",
          type: "store",
          isApproved: true,
          ...param,
        },
        {
          status: "active",
          type: Not("store"),
          ...param,
        },
      ],
      take: limit,

      skip: skip,
      relations: ['user', 'product'],
    });
    return serviceResponse({
      data: findall,
      message: "Product plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.productRepository,
        query,
        querys: param,
      }),
    });
  }
  //toggle isActive field
  async toggleActive(id: string, isActive: boolean): Promise<any> {
    await this.productRepository.update(id, { isActive });
    const product = await this.productRepository.findOne({ where: { _id: id } });
    return serviceResponse({
      data: product,
      message: `Product plan ${isActive ? "activated" : "deactivated"} successfully`,
      status: true,
    });
  }

  async findAll(query: any): Promise<any> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const findall = await this.productRepository.find({
      take: limit,
      skip: skip,
      relations: ['user'],
    });
    return serviceResponse({
      data: findall,
      message: "Product plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.productRepository,
        query,
        querys: {},
      }),
    });
  }

  async findOne(id: string): Promise<ProductSqlModel> {
    return this.productRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async update(
    id: string,
    product: Partial<ProductSqlModel>,
    userData: UserDTO
  ): Promise<any> {
    // console.log(object)
    delete product._id
    if (product.type == "custom" && !userData.isAdmin) {
      throw new NotAcceptableException("You are not authorized to create custom products");
    }

    // Get original product before update
    const originalProduct = await this.productRepository.findOne({ where: { _id: id } });

    // Update the product
    await this.productRepository.update(id, { ...product, });
    const updatedProduct = await this.productRepository.findOne({ where: { _id: id } });

    // If basePrice changed, update all reseller products based on this one
    if (originalProduct && updatedProduct && originalProduct.basePrice !== updatedProduct.basePrice) {
      const oldBasePrice = Number(originalProduct.basePrice);
      const newBasePrice = Number(updatedProduct.basePrice);

      // Calculate percentage change (to apply same % to reseller prices)
      const percentageChange = oldBasePrice !== 0 ? (newBasePrice - oldBasePrice) / oldBasePrice : 0;

      // Get all reseller products that are based on this product (productID = id)
      const resellerProducts = await this.productRepository.find({
        where: { productID: id, isResell: true }
      });

      // Function to round to 2 decimal places
      const roundTo2Decimals = (num: number) => Math.round(num * 100) / 100;

      // Update each reseller product
      for (const resellerProduct of resellerProducts) {
        const newResellerBasePrice = Number(resellerProduct.basePrice) * (1 + percentageChange);
        const newSalePrice = resellerProduct.salePrice ? Number(resellerProduct.salePrice) * (1 + percentageChange) : undefined;
        const newDiscountPrice = resellerProduct.discountPrice ? Number(resellerProduct.discountPrice) * (1 + percentageChange) : undefined;
        const newStandardPrice = resellerProduct.standardPrice ? Number(resellerProduct.standardPrice) * (1 + percentageChange) : undefined;
        const newLargePrice = resellerProduct.largePrice ? Number(resellerProduct.largePrice) * (1 + percentageChange) : undefined;

        await this.productRepository.update(resellerProduct._id, {
          basePrice: roundTo2Decimals(newResellerBasePrice),
          salePrice: newSalePrice ? roundTo2Decimals(newSalePrice) : undefined,
          discountPrice: newDiscountPrice ? roundTo2Decimals(newDiscountPrice) : undefined,
          standardPrice: newStandardPrice ? roundTo2Decimals(newStandardPrice) : undefined,
          largePrice: newLargePrice ? roundTo2Decimals(newLargePrice) : undefined,
        });

        // TODO: Send notification/email to reseller (implement notification service later)
        console.log(`Updated reseller product ${resellerProduct._id} for user ${resellerProduct.userID}`);
      }
    }

    return serviceResponse({
      data: updatedProduct,
      message: "Product updated successfully",
      status: true,
    });
  }

  async remove(id: string, userData: any): Promise<any> {
    const product = await this.productRepository.findOne({ where: { _id: id } });
    if (!product) {
      throw new NotFoundException("Product not found");
    }

    // Allow admin/super admin to delete any product, or seller to delete their own product
    const isAdminOrSuper = userData.role === "admin" || userData.role === "super_admin";
    const isOwner = String(product.userID) === String(userData._id);
    if (!isAdminOrSuper && !isOwner) {
      throw new NotAcceptableException("You are not authorized to delete this product");
    }

    // Soft delete: mark as inactive
    await this.productRepository.update(id, { isActive: false, status: "inactive" });
    const updatedProduct = await this.productRepository.findOne({ where: { _id: id } });
    return serviceResponse({
      data: updatedProduct,
      message: "Product deleted successfully (soft delete)",
      status: true,
    });
  }

  async forceRemove(id: string, userData: any): Promise<any> {
    const product = await this.productRepository.findOne({ where: { _id: id } });
    if (!product) {
      throw new NotFoundException("Product not found");
    }

    // Allow admin/super admin to force delete any product, or seller to force delete their own product
    const isAdminOrSuper = userData.role === "admin" || userData.role === "super_admin";
    const isOwner = String(product.userID) === String(userData._id);
    if (!isAdminOrSuper && !isOwner) {
      throw new NotAcceptableException("You are not authorized to force delete this product");
    }

    // Hard delete: remove from database
    return serviceResponse({
      data: await this.productRepository.delete({ _id: id }),
      message: "Product permanently deleted",
      status: true,
    });
  }

  async rateProduct(
    id: string,
    payload: { rating: number; content?: string; feedback?: string },
    userData: UserDTO
  ): Promise<any> {
    const product = await this.productRepository.findOne({ where: { _id: id } });
    if (!product) {
      return serviceResponse({ status: false, message: "Product not found" });
    }
    const ratingValue = Number(payload.rating);
    if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5) {
      return serviceResponse({ status: false, message: "Invalid rating value" });
    }
    const feedback = payload.feedback ?? payload.content ?? "";
    const existing = Array.isArray(product.rating) ? product.rating : [];
    const idx = existing.findIndex((r: any) => String(r.userID) === String(userData._id));
    const entry = {
      rating: ratingValue,
      feedback,
      userID: String(userData._id),
      date: new Date(),
    };
    if (idx >= 0) {
      existing[idx] = entry;
    } else {
      existing.push(entry);
    }
    const avg =
      existing.length > 0
        ? existing.reduce((sum: number, r: any) => sum + Number(r.rating || 0), 0) / existing.length
        : 0;
    await this.productRepository.update(id, { rating: existing as any, averageRating: avg });
    const updated = await this.productRepository.findOne({ where: { _id: id } });
    return serviceResponse({
      status: true,
      message: "Product rated successfully",
      data: updated,
    });
  }

  async findSellers(query: any) {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;

    // Find distinct userIDs from products
    const result = await this.productRepository
      .createQueryBuilder('product')
      .select('DISTINCT product.userID', 'userID')
      .limit(limit)
      .offset(skip)
      .getRawMany();

    const userIDs = result.map((r) => r.userID);

    if (userIDs.length === 0) {
      return serviceResponse({
        data: [],
        message: 'Sellers retrieved successfully',
        status: true,
        metadata: { total: 0, page, limit },
      });
    }

    const [users, total] = await this.userRepository.findAndCount({
      where: { _id: In(userIDs), isReseller: true },
      select: ['_id', 'bio', 'fullname', 'email', 'profileImage', 'coverImage', 'username'],

    });

    return serviceResponse({
      data: users,
      message: 'Sellers retrieved successfully',
      status: true,
      metadata: { total, page, limit },
    });
  }

  async findByUsername(username: string, query: any) {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;

    const user = await this.userRepository.findOne({
      where: { username }, select: ['_id', 'fullname', 'email', 'profileImage', 'coverImage', 'username', 'bio'],
    });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }

    const [products, total] = await this.productRepository.findAndCount({
      where: { userID: user._id, isApproved: true, isResell: true },
      take: limit,
      skip: skip,
      relations: ['user'],
    });

    return serviceResponse({
      data: {
        user,
        products
      },
      message: `Products for user ${username} retrieved successfully`,
      status: true,
      metadata: await getSqlMetadata({
        model: this.productRepository,
        query,
        querys: { userID: user._id, isApproved: true, isResell: true },
      }),
    });
  }


  async getAllCustomProducts(query: any) {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const findall = await this.productRepository.find({
      where: { type: "custom", status: "active", },
      take: limit,
      skip: skip,
      relations: ['user', 'product'],
    });
    return serviceResponse({
      data: findall,
      message: "Product plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.productRepository,
        query,
        querys: { type: "custom" },
      }),
    });
  }

  async getAllShopifyProducts(query: any) {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const findall = await this.productRepository.createQueryBuilder('product')
      .leftJoinAndSelect('product.user', 'user')  // Include relations if necessary
      .leftJoinAndSelect('product.product', 'productRelation')
      .where('product.type = :type', { type: 'store' })
      .andWhere('product.status = :status', { status: 'active' })
      .andWhere('product.isApproved = :isApproved', { isApproved: true })
      .andWhere(
        new Brackets(qb => {
          qb.where('product.isResell = :isResell', { isResell: true })
            .andWhere('product.isApproved = :isApproved', { isApproved: true })
            .orWhere('product.isResell = :isResellFalse', { isResellFalse: false });
        })
      )
    return serviceResponse({
      data: findall,
      message: "Product plans retrieved successfully",
      status: true,
      // metadata: await getSqlMetadata({
      //   model: this.productRepository,
      //   query,
      //   querys: { type: "shopify" },
      // }),
    });
  }


}
