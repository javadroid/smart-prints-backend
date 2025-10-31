import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DesignSqlModel } from "@app/sql-schema/design.sql-schema";
import {
  getSqlMetadata,
  ObjectReturnType,
  serviceResponse,
} from "@app/service";
import { UserDTO } from "@app/dto";

@Injectable()
export class DesignSqlService {
  constructor(
    @InjectRepository(DesignSqlModel)
    private readonly designRepository: Repository<DesignSqlModel>
  ) {}

  async create(
    design: Partial<DesignSqlModel>,
    userData: UserDTO
  ): Promise<any> {
    const newDesign = this.designRepository.create({
      ...design,
      userID: userData._id.toString(),
    });
    const data = await this.designRepository.save(newDesign);
    return serviceResponse({
      data,
      message: "Design plan created successfully",

      status: true,
    });
  }
  async findByAny(param: any, query: any): Promise<any> {
    const { key, value } = param;
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const findall = await this.designRepository.find({
      where: { [key]: value },
      take: limit,
      skip: skip,
      relations: ["user"],
    });
    return serviceResponse({
      data: findall,
      message: "Design plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.designRepository,
        query,
        querys: { [key]: value },
      }),
    });
  }

  async findByMany(param: any, query: any): Promise<any> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    console.log(param);
    const findall = await this.designRepository.find({
      where: param,
      take: limit,
      skip: skip,
      relations: ["user"],
    });
    return serviceResponse({
      data: findall,
      message: "Design plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.designRepository,
        query,
        querys: param,
      }),
    });
  }
  async findAll(query: any): Promise<any> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const findall = await this.designRepository.find({
      take: limit,
      skip: skip,
      relations: ["user"],
    });
    return serviceResponse({
      data: findall,
      message: "Design plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.designRepository,
        query,
        querys: {},
      }),
    });
  }

  async findOne(id: string): Promise<DesignSqlModel> {
    return this.designRepository.findOne({
      where: { id },
      relations: ["user"],
    });
  }

  async update(
    id: string,
    design: Partial<DesignSqlModel>,
    userData: UserDTO
  ): Promise<any> {
    // console.log(object)
    delete design._id;
    await this.designRepository.update(id, {
      ...design,
      userID: userData._id.toString(),
    });
    const designs = await this.designRepository.findOne({ where: { _id: id } });
    return serviceResponse({
      data: designs,
      message: "Design updated successfully",

      status: true,
    });
  }

  async remove(id: string): Promise<any> {
    return serviceResponse({
      data: await this.designRepository.delete({ _id: id }),
      message: "Design plan deleted successfully",

      status: true,
    });
  }

  async searchByTags(tag: string, query: any): Promise<ObjectReturnType> {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    const plans = await this.designRepository
      .createQueryBuilder("designs") // 'design' is an alias for the Design entity
      .where("design.tags ILIKE :tag", { tag: `%${tag}%` }) // Case-insensitive search
      .orderBy("design.createdAt", "DESC") // Sorting
      .skip(skip) // Pagination offset
      .take(limit) // Limit the number of results
      .getMany();

    return serviceResponse({
      data: plans,
      message: "Design plans retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: this.designRepository,
        query,
        querys: { tags: tag },
      }),
    });
  }
}
