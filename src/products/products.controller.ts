import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductDto } from '@app/dto';
import { JwtAuthGuard } from '@app/guard';
import { ApiOperation, ApiBody, ApiParam, ApiQuery, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("product")
@ApiBearerAuth("access-token")

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

   @Post()
  @ApiOperation({ summary: "Create a new product" })
  @ApiBody({
    type: ProductDto,
    description: "Creating a new product Details",
  })
  @UseGuards(JwtAuthGuard)
  async create(@Body() product: ProductDto, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   product.organizationID,
    //   req.product?._id?.toString(),
    //   Action.Create,
    //   ProductModel,
    // );
    return this.productService.upset(product, req.user);
  }

  @Patch(":productID")
  @ApiOperation({ summary: "Update existing products" })
  @ApiParam({
    name: "productID",
    description: "The productID to search for",
    type: String,
  })
  @ApiBody({
    type: ProductDto,
    description: "Updating existing products",
  })
  @UseGuards(JwtAuthGuard)
  async update(@Body() product: ProductDto, @Param("productID") productID: string, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   product.organizationID,
    //   req.product._id.toString(),
    //   Action.Update,
    //   ProductModel,
    // );
    return this.productService.update( productID, product, req.user);
  }

  @Get("by-any/:key/:value")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Find a product by any key-value pair" })
  @ApiParam({ name: "key", description: "The key to search by", type: String })
  @ApiParam({
    name: "value",
    description: "The value to search for",
    type: String,
  })
  @ApiQuery({
    name: "page",
    required: false,
    description: "Page number for pagination",
    type: Number,
  })
  @ApiQuery({
    name: "limit",
    required: false,
    description: "Number of products per page",
    type: Number,
  })
  async findbyId(
    @Param() params: { key: string; value: string },
    @Query() query: any
  ) {
    return this.productService.findByAny(params, query);
  }

  @Get("")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all products" })
  @UseGuards(JwtAuthGuard)
  @ApiQuery({
    name: "page",
    required: false,
    description: "Page number for pagination",
    type: Number,
  })
  @ApiQuery({
    name: "limit",
    required: false,
    description: "Number of products per page",
    type: Number,
  })
  async findAll(@Query() query: any) {
    return this.productService.findAll(query);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  
  @ApiOperation({ summary: "Delete products by their IDs" })
  @ApiBody({ type: [String], description: "Array of product IDs to delete" })
  async delete(@Body() ids: string[],  @Req() req: any) {
    return this.productService.delete(ids, req.user);
  }
  
}
