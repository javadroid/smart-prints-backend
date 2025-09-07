import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '@app/guard';
import { CartDto } from '@app/dto';

@ApiTags('cart')
@ApiBearerAuth('access-token')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({ summary: 'Create or replace user cart' })
  @ApiBody({ type: CartDto })
  @UseGuards(JwtAuthGuard)
  async create(@Body() cart: CartDto, @Req() req: any) {
    return this.cartService.upset(cart, req.user);
  }

  @Get('user/:userID')
  @ApiOperation({ summary: 'Get cart by user ID' })
  @ApiParam({ name: 'userID', required: true, type: String })
  @UseGuards(JwtAuthGuard)
  async findByUser(@Param('userID') userID: string) {
    return this.cartService.findByUser(userID);
  }

  @Get('')
  @ApiOperation({ summary: 'Get all carts' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @UseGuards(JwtAuthGuard)
  async findAll(@Query() query: any) {
    return this.cartService.findAll(query);
  }

  @Patch(':cartID')
  @ApiOperation({ summary: 'Update cart by id' })
  @ApiParam({ name: 'cartID', required: true, type: String })
  @ApiBody({ type: CartDto })
  @UseGuards(JwtAuthGuard)
  async update(@Param('cartID') cartID: string, @Body() cart: CartDto) {
    return this.cartService.update(cartID, cart);
  }

  @Delete('')
  @ApiOperation({ summary: 'Delete carts by IDs' })
  @ApiBody({ schema: { type: 'array', items: { type: 'string' } } })
  @UseGuards(JwtAuthGuard)
  async delete(@Body() ids: string[]) {
    return this.cartService.delete(ids);
  }
}
