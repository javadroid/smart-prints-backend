import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UseGuards } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderDto } from '@app/dto';
import { JwtAuthGuard } from '@app/guard';
import { ApiOperation, ApiBody, ApiParam, ApiQuery, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("order")
@ApiBearerAuth("access-token")

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

   @Post()
  @ApiOperation({ summary: "Create a new order" })
  @ApiBody({
    type: OrderDto,
    description: "Creating a new order Details",
  })
  @UseGuards(JwtAuthGuard)
  async create(@Body() order: OrderDto, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   order.organizationID,
    //   req.order?._id?.toString(),
    //   Action.Create,
    //   OrderModel,
    // );
    return this.orderService.upset(order, req.user);
  }

  @Patch(":orderID")
  @ApiOperation({ summary: "Update existing orders" })
  @ApiParam({
    name: "orderID",
    description: "The orderID to search for",
    type: String,
  })
  @ApiBody({
    type: OrderDto,
    description: "Updating existing orders",
  })
  @UseGuards(JwtAuthGuard)
  async update(@Body() order: OrderDto, @Param("orderID") orderID: string, @Req() req: any) {
    // await this.organizationAbilityFactory.checkAbility(
    //   order.organizationID,
    //   req.order._id.toString(),
    //   Action.Update,
    //   OrderModel,
    // );
    return this.orderService.update( orderID, order, req.user);
  }

  @Get("by-any/:key/:value")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Find a order by any key-value pair" })
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
    description: "Number of orders per page",
    type: Number,
  })
  async findbyId(
    @Param() params: { key: string; value: string },
    @Query() query: any
  ) {
    return this.orderService.findByAny(params, query);
  }

  @Get("")
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get all orders" })
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
    description: "Number of orders per page",
    type: Number,
  })
  async findAll(@Query() query: any) {
    return this.orderService.findAll(query);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  
  @ApiOperation({ summary: "Delete orders by their IDs" })
  @ApiBody({ type: [String], description: "Array of order IDs to delete" })
  async delete(@Body() ids: string[],  @Req() req: any) {
    return this.orderService.delete(ids, req.user);
  }
  
}
