import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UseGuards } from '@nestjs/common';
import { DesignService } from './designs.service';
import { DesignDto } from '@app/dto';
import { JwtAuthGuard } from '@app/guard';
import { ApiOperation, ApiBody, ApiParam, ApiQuery, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("design")
@ApiBearerAuth("access-token")

@Controller('designs')
export class DesignController {
  constructor(private readonly designService: DesignService) {}

   @Post()
  @ApiOperation({ summary: "Create a new design" })
  @ApiBody({
    type: DesignDto,
    description: "Creating a new design Details",
  })
  @UseGuards(JwtAuthGuard)
  async create(@Body() design: DesignDto, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   design.organizationID,
    //   req.design?._id?.toString(),
    //   Action.Create,
    //   DesignModel,
    // );
    return this.designService.upset(design, req.user);
  }

  @Patch(":designID")
  @ApiOperation({ summary: "Update existing designs" })
  @ApiParam({
    name: "designID",
    description: "The designID to search for",
    type: String,
  })
  @ApiBody({
    type: DesignDto,
    description: "Updating existing designs",
  })
  @UseGuards(JwtAuthGuard)
  async update(@Body() design: DesignDto, @Param("designID") designID: string, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   design.organizationID,
    //   req.design._id.toString(),
    //   Action.Update,
    //   DesignModel,
    // );
    return this.designService.update( designID, design, req.user);
  }

  @Get("by-any/:key/:value")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Find a design by any key-value pair" })
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
    description: "Number of designs per page",
    type: Number,
  })
  async findbyId(
    @Param() params: { key: string; value: string },
    @Query() query: any
  ) {
    return this.designService.findByAny(params, query);
  }

  @Get("")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all designs" })
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
    description: "Number of designs per page",
    type: Number,
  })
  async findAll(@Query() query: any) {
    return this.designService.findAll(query);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete design by ID" }) 
  @UseGuards(JwtAuthGuard)
  async delete(@Param("id") ids: string) {
    return this.designService.delete(ids);
  }
//search designs by tags
  @Get("by-tags/:tag")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Find designs by tag" })
  @ApiParam({ name: "tag", description: "The tag to search by", type: String })
  @ApiQuery({
    name: "page",
    required: false,
    description: "Page number for pagination",
    type: Number,
  })
  @ApiQuery({
    name: "limit",
    required: false,
    description: "Number of designs per page",
    type: Number,
  })
  async searchByTags(
    @Param("tag") tag: string,
    @Query() query: any
  ) {
    return this.designService.searchByTags(tag, query);
  }
}
