import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from '@app/dto';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { ApiOperation, ApiBody, ApiParam, ApiQuery, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';
import { CategoriesSqlService } from './categories-sql.service';

@ApiTags("categories")
@ApiBearerAuth("access-token")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesSqlService) {}

   @Post()
  @ApiOperation({ summary: "Create a new categories" })
  @ApiBody({
    type: CategoriesDto,
    description: "Creating a new categories Details",
  })
  @UseGuards(JwtAuthGuard)
  async create(@Body() categories: CategoriesDto, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   categories.organizationID,
    //   req.categories?._id?.toString(),
    //   Action.Create,
    //   CategoriesModel,
    // );
    return this.categoriesService.create(categories, );
  }

  @Patch(":categoriesID")
  @ApiOperation({ summary: "Update existing categoriess" })
  @ApiParam({
    name: "categoriesID",
    description: "The categoriesID to search for",
    type: String,
  })
  @ApiBody({
    type: CategoriesDto,
    description: "Updating existing categoriess",
  })
  @UseGuards(JwtAuthGuard)
  async update(@Body() categories: CategoriesDto, @Param("categoriesID") categoriesID: string, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   categories.organizationID,
    //   req.categories._id.toString(),
    //   Action.Update,
    //   CategoriesModel,
    // );
    return this.categoriesService.update( categoriesID, categories, );
  }

  // @Get("by-any/:key/:value")
  // // @UseGuards(JwtAuthGuard)
  // @ApiOperation({ summary: "Find a categories by any key-value pair" })
  // @ApiParam({ name: "key", description: "The key to search by", type: String })
  // @ApiParam({
  //   name: "value",
  //   description: "The value to search for",
  //   type: String,
  // })
  // @ApiQuery({
  //   name: "page",
  //   required: false,
  //   description: "Page number for pagination",
  //   type: Number,
  // })
  // @ApiQuery({
  //   name: "limit",
  //   required: false,
  //   description: "Number of categoriess per page",
  //   type: Number,
  // })
  // async findbyId(
  //   @Param() params: { key: string; value: string },
  //   @Query() query: any
  // ) {
  //   return this.categoriesService.f(params, query);
  // }

  @Get("")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all categoriess" })
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
    description: "Number of categoriess per page",
    type: Number,
  })
  async findAll(@Query() query: any) {
    return this.categoriesService.findAll();
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  
  @ApiOperation({ summary: "Delete categoriess by their IDs" })

  async delete(@Param("id") ids: string,  @Req() req: any) {
    return this.categoriesService.remove(ids, );
  }
  
}
