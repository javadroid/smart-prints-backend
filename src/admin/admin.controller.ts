import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';
import { ApiBearerAuth, ApiBody, ApiQuery } from '@nestjs/swagger';
import { DeliveryPriceDTO } from '@app/dto';

@Controller('admin')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  
  @Get('dashboard-stats')
@UseGuards( RolesGuard)
@Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
  async getDashboardStats() {
    return this.adminService.getDashboardStats();
  }

  @Post('delivery-price')
  @ApiBody({type:DeliveryPriceDTO})
  async createDeliveryPrice(@Body() deliveryPriceDto: DeliveryPriceDTO) {
    return this.adminService.createDeliveryPrice(deliveryPriceDto);
  }

  @Get('delivery-price')
  @ApiQuery({ name: 'country', required: false })
  @ApiQuery({ name: 'state', required: false })
  @ApiQuery({ name: 'lga', required: false })
  async getDeliveryPrices(
    @Query('country') country?: string,
    @Query('state') state?: string,
    @Query('lga') lga?: string,
  ) {
    return this.adminService.getDeliveryPrices(country, state, lga);
  }

  @Delete('delivery-price/:id')
  async deleteDeliveryPrice(@Param('id') id: string) {
    return this.adminService.deleteDeliveryPrice(id);
  }
}
