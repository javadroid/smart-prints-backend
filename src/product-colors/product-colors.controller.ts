import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductColorsService } from './product-colors.service';
import { ProductColorDTO } from '@app/dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
// import { JwtAuthGuard } from '@app/guard'; // Uncomment if auth is needed

@ApiTags('Product Colors')
@Controller('product-colors')
export class ProductColorsController {
  constructor(private readonly productColorsService: ProductColorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product color' })
  @ApiResponse({ status: 201, description: 'The product color has been successfully created.' })
  create(@Body() createProductColorDto: ProductColorDTO) {
    return this.productColorsService.create(createProductColorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all product colors' })
  @ApiResponse({ status: 200, description: 'Return all product colors.' })
  findAll() {
    return this.productColorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product color by id' })
  @ApiResponse({ status: 200, description: 'Return the product color.' })
  findOne(@Param('id') id: string) {
    return this.productColorsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product color' })
  @ApiResponse({ status: 200, description: 'The product color has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateProductColorDto: ProductColorDTO) {
    return this.productColorsService.update(id, updateProductColorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product color' })
  @ApiResponse({ status: 200, description: 'The product color has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.productColorsService.remove(id);
  }
}
