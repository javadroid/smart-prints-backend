import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesSqlModel } from '@app/sql-schema/categories.sql-schema';
import e from 'express';

@Injectable()
export class CategoriesSqlService {
  constructor(
    @InjectRepository(CategoriesSqlModel)
    private readonly categoriesRepository: Repository<CategoriesSqlModel>,
  ) {}

  async create(category: Partial<CategoriesSqlModel>): Promise<CategoriesSqlModel> {
    try {
       const newCategory = this.categoriesRepository.create(category);
    return this.categoriesRepository.save(newCategory);
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
   
  }

  async findAll(): Promise<CategoriesSqlModel[]> {
    return this.categoriesRepository.find();
  }

  async findOne(id: string): Promise<CategoriesSqlModel> {
    return this.categoriesRepository.findOne({ where: { _id:id } });
  }

  async update(id: string, category: Partial<CategoriesSqlModel>): Promise<CategoriesSqlModel> {
    await this.categoriesRepository.update(id, category);
    return this.categoriesRepository.findOne({ where: { _id:id } });
  }

  async remove(id: string): Promise<any> {
   return await this.categoriesRepository.delete(id);
  }
}