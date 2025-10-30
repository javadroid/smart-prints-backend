import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DesignSqlModel } from '@app/sql-schema/design.sql-schema';

@Injectable()
export class DesignSqlService {
  constructor(
    @InjectRepository(DesignSqlModel)
    private readonly designRepository: Repository<DesignSqlModel>,
  ) {}

  async create(design: Partial<DesignSqlModel>): Promise<DesignSqlModel> {
    const newDesign = this.designRepository.create(design);
    return this.designRepository.save(newDesign);
  }

  async findAll(): Promise<DesignSqlModel[]> {
    return this.designRepository.find();
  }

  async findOne(id: string): Promise<DesignSqlModel> {
    return this.designRepository.findOne({ where: { id } });
  }

  async update(id: string, design: Partial<DesignSqlModel>): Promise<DesignSqlModel> {
    await this.designRepository.update(id, design);
    return this.designRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.designRepository.delete(id);
  }
}