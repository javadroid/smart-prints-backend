import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UseGuards } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from '@app/dto';
import { JwtAuthGuard } from '@app/guard';
import { ApiOperation, ApiBody, ApiParam, ApiQuery, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("address")
@ApiBearerAuth("access-token")

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

   @Post()
  @ApiOperation({ summary: "Create a new address" })
  @ApiBody({
    type: AddressDto,
    description: "Creating a new address Details",
  })
  @UseGuards(JwtAuthGuard)
  async create(@Body() address: AddressDto, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   address.organizationID,
    //   req.address?._id?.toString(),
    //   Action.Create,
    //   AddressModel,
    // );
    return this.addressService.upset(address, req.user);
  }

  @Patch(":addressID")
  @ApiOperation({ summary: "Update existing addresss" })
  @ApiParam({
    name: "addressID",
    description: "The addressID to search for",
    type: String,
  })
  @ApiBody({
    type: AddressDto,
    description: "Updating existing addresss",
  })
  @UseGuards(JwtAuthGuard)
  async update(@Body() address: AddressDto, @Param("addressID") addressID: string, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   address.organizationID,
    //   req.address._id.toString(),
    //   Action.Update,
    //   AddressModel,
    // );
    return this.addressService.update( addressID, address, req.user);
  }

  @Get("by-any/:key/:value")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Find a address by any key-value pair" })
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
    description: "Number of addresss per page",
    type: Number,
  })
  async findbyId(
    @Param() params: { key: string; value: string },
    @Query() query: any
  ) {
    return this.addressService.findByAny(params, query);
  }

  @Get("")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all addresss" })
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
    description: "Number of addresss per page",
    type: Number,
  })
  async findAll(@Query() query: any) {
    return this.addressService.findAll(query);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  
  @ApiOperation({ summary: "Delete addresss by their IDs" })
  @ApiBody({ type: [String], description: "Array of address IDs to delete" })
  async delete(@Body() ids: string[],  @Req() req: any) {
    return this.addressService.delete(ids, req.user);
  }
  
}
