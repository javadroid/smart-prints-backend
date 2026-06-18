import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GallerySqlModel } from '@app/sql-schema/gallery.sql-schema';
import { GalleryDTO } from '@app/dto';
import {
  getSqlMetadata,
  ObjectReturnType,
  serviceResponse,
} from '@app/service';

@Injectable()
export class GalleryService implements OnModuleInit {
  constructor(
    @InjectRepository(GallerySqlModel)
    private readonly galleryRepository: Repository<GallerySqlModel>,
  ) {}

  async onModuleInit() {
    
  }

  async create(dto: GalleryDTO): Promise<ObjectReturnType> {
    const newItem = this.galleryRepository.create({
      title: dto.title,
      imageUrl: dto.imageUrl,
      imageUrls: dto.imageUrls || [dto.imageUrl],
      description: dto.description,
      tags: dto.tags || [],
    });
    const data = await this.galleryRepository.save(newItem);
    return serviceResponse({
      data,
      message: 'Gallery item created successfully',
      status: true,
    });
  }

  async findAll(query: any): Promise<ObjectReturnType> {
    const { limit = 12, page = 1, search = '' } = query;
    const limitNum = Number(limit);
    const pageNum = Number(page);
    const skip = (pageNum - 1) * limitNum;

    const queryBuilder = this.galleryRepository.createQueryBuilder('gallery');

    if (search && search.trim() !== '') {
      queryBuilder.where(
        'gallery.title LIKE :search OR gallery.description LIKE :search OR gallery.tags LIKE :search',
        { search: `%${search}%` },
      );
    }

    queryBuilder
      .orderBy('gallery.createdAt', 'DESC')
      .skip(skip)
      .take(limitNum);

    const [items, total] = await queryBuilder.getManyAndCount();

    return serviceResponse({
      data: items,
      message: 'Gallery items retrieved successfully',
      status: true,
      metadata: {
        total,
        totalPage: Math.ceil(total / limitNum),
        currentPage: pageNum,
        limit: limitNum,
      },
    });
  }

  async findOne(id: string): Promise<ObjectReturnType> {
    const data = await this.galleryRepository.findOne({
      where: { _id: id },
    });
    return serviceResponse({
      data,
      message: data ? 'Gallery item retrieved successfully' : 'Gallery item not found',
      status: !!data,
    });
  }

  async update(id: string, dto: Partial<GalleryDTO>): Promise<ObjectReturnType> {
    await this.galleryRepository.update(id, dto);
    const updated = await this.galleryRepository.findOne({
      where: { _id: id },
    });
    return serviceResponse({
      data: updated,
      message: 'Gallery item updated successfully',
      status: true,
    });
  }

  async remove(id: string): Promise<ObjectReturnType> {
    await this.galleryRepository.delete({ _id: id });
    return serviceResponse({
      message: 'Gallery item deleted successfully',
      status: true,
    });
  }
}
