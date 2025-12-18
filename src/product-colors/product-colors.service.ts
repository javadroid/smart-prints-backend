import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductColorSqlModel } from '@app/sql-schema';
import { ProductColorDTO } from '@app/dto';
import { serviceResponse } from '@app/service';

@Injectable()
export class ProductColorsService {
  constructor(
    @InjectRepository(ProductColorSqlModel)
    private readonly productColorRepository: Repository<ProductColorSqlModel>,
  ) {}

  async create(createProductColorDto: ProductColorDTO) {
    try {
      const productColor = this.productColorRepository.create(createProductColorDto);
      const savedColor = await this.productColorRepository.save(productColor);
      return serviceResponse({
        data: savedColor,
        message: 'Product color created successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to create product color',
        status: false,
        data: error.message,
      });
    }
  }

  async findAll() {
    try {
      const colors = await this.productColorRepository.find();
      return serviceResponse({
        data: colors,
        message: 'Product colors retrieved successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to retrieve product colors',
        status: false,
        data: error.message,
      });
    }
  }

  async findOne(id: string) {
    try {
      const color = await this.productColorRepository.findOne({ where: { _id: id } });
      if (!color) {
        return serviceResponse({
          message: 'Product color not found',
          status: false,
        });
      }
      return serviceResponse({
        data: color,
        message: 'Product color retrieved successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to retrieve product color',
        status: false,
        data: error.message,
      });
    }
  }

  async update(id: string, updateProductColorDto: ProductColorDTO) {
    try {
      const updateResult = await this.productColorRepository.update(id, updateProductColorDto);
      if (updateResult.affected === 0) {
        return serviceResponse({
          message: 'Product color not found',
          status: false,
        });
      }
      const updatedColor = await this.productColorRepository.findOne({ where: { _id: id } });
      return serviceResponse({
        data: updatedColor,
        message: 'Product color updated successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to update product color',
        status: false,
        data: error.message,
      });
    }
  }

  async remove(id: string) {
    try {
      const deleteResult = await this.productColorRepository.delete(id);
      if (deleteResult.affected === 0) {
        return serviceResponse({
          message: 'Product color not found',
          status: false,
        });
      }
      return serviceResponse({
        message: 'Product color deleted successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to delete product color',
        status: false,
        data: error.message,
      });
    }
  }
}
