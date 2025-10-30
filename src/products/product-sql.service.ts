import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductSqlModel } from "@app/sql-schema/product.sql-schema";
import { getSqlMetadata, serviceResponse } from "@app/service";
import { UserDTO } from "@app/dto";

@Injectable()
export class ProductSqlService {
  constructor(
    @InjectRepository(ProductSqlModel)
    private readonly productRepository: Repository<ProductSqlModel>
  ) {}

  async create(product: Partial<ProductSqlModel>,userData:UserDTO): Promise<any> {
    const newProduct = this.productRepository.create({...product,userID:userData._id.toString()});
    const data = await this.productRepository.save(newProduct);
    return serviceResponse({
      data,
      message: "Product plan created successfully",

      status: true,
    });
  }
async findByAny(param:any,query: any): Promise<any> {
  const {key, value }=param
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const findall = await this.productRepository.find({where:{[key]:value,}, take: limit, skip: skip,relations: ['user'], });
    return serviceResponse({
      data: findall,
      message: "Product plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.productRepository,
        query,
        querys: {[key]:value},
      }),
    });
  }

  async findByMany(param:any,query: any): Promise<any> {
 
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    console.log(param)
    const findall = await this.productRepository.find({
      where: param,
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
        querys: param,
      }),
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
    return this.productRepository.findOne({ where: { id },relations: ['user'] });
  }

  async update(
    id: string,
    product: Partial<ProductSqlModel>,
    userData:UserDTO
  ): Promise<any> {
    // console.log(object)
   delete product._id
    await this.productRepository.update(id, {...product,userID:userData._id.toString()});
const products=await this.productRepository.findOne({ where: { _id:id } });
    return serviceResponse({
      data:products,
      message: "Product updated successfully",

      status: true,
    });
     
  }

  async remove(id: string): Promise<any> {
    

    return serviceResponse({
      data:await this.productRepository.delete({_id:id}),
      message: "Product plan deleted successfully",

      status: true,
    });
  }
}
