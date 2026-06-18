import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsArray } from 'class-validator';

export class GalleryDTO {
  @ApiProperty({ example: 'Summer Floral T-Shirt Design', description: 'Title of the gallery image' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'http://localhost:1912/uploads/sample.png', description: 'URL of the gallery image' })
  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @ApiProperty({ example: ['http://localhost:1912/uploads/sample.png'], description: 'Additional URLs of the gallery images', required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];

  @ApiProperty({ example: 'A vibrant floral design printed on high quality cotton apparel.', description: 'Description of the image', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: ['floral', 'summer', 't-shirt'], description: 'Tags associated with the image', required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
