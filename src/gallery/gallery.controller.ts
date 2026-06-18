import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryDTO } from '@app/dto';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { ApiOperation, ApiBody, ApiParam, ApiQuery, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('gallery')
@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Create a new gallery item' })
  @ApiBody({ type: GalleryDTO, description: 'Details of the new gallery item' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() dto: GalleryDTO) {
    return this.galleryService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all gallery items' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  async findAll(@Query() query: any) {
    return this.galleryService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single gallery item by ID' })
  @ApiParam({ name: 'id', description: 'The unique ID of the gallery item' })
  async findOne(@Param('id') id: string) {
    return this.galleryService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Update an existing gallery item' })
  @ApiParam({ name: 'id', description: 'The unique ID of the gallery item' })
  @ApiBody({ type: GalleryDTO, description: 'Partial details to update' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  async update(@Param('id') id: string, @Body() dto: Partial<GalleryDTO>) {
    return this.galleryService.update(id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Delete a gallery item by ID' })
  @ApiParam({ name: 'id', description: 'The unique ID of the gallery item' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  async remove(@Param('id') id: string) {
    return this.galleryService.remove(id);
  }
}
