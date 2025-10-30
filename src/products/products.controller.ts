import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductDto } from '@app/dto';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { ApiOperation, ApiBody, ApiParam, ApiQuery, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';
import { ProductSqlService } from './product-sql.service';

@ApiTags("product")
@ApiBearerAuth("access-token")

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductSqlService) {}

   @Post()
   @UseGuards(JwtAuthGuard, 
    // RolesGuard
)
// @Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
  @ApiOperation({ summary: "Create a new product" })
  @ApiBody({
    type: ProductDto,
    description: "Creating a new product Details",
  })
 
  async create(@Body() product: ProductDto, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   product.organizationID,
    //   req.product?._id?.toString(),
    //   Action.Create,
    //   ProductModel,
    // );
    return this.productService.create(product, req.user);
  }

  @Patch(":productID")
  @UseGuards(JwtAuthGuard, )
// @Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
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
@Post("by-many")
  @ApiBody({
    required: false,
    type: ProductDto,
  })
  async findbyMany(
    @Body() params: ProductDto,
    @Query() query: any
  ) {
    return this.productService.findByMany(params, query);
  }
  @Get("")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all products" })
  // @UseGuards(JwtAuthGuard)
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

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  
  @ApiOperation({ summary: "Delete products by their IDs" })
 
  async delete(@Param("id") ids: string,  @Req() req: any) {
    return this.productService.remove(ids, );
  }
  
}
