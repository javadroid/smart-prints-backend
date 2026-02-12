import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiQuery } from '@nestjs/swagger';
import { AdminSendEmailDTO, DeliveryPriceDTO, SiteSettingsDTO, UserDTO } from '@app/dto';
import { UserSqlModel } from '@app/sql-schema';
import { FilesInterceptor } from '@nestjs/platform-express';

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
  @ApiQuery({ name: 'zone', required: false })
  async getDeliveryPrices(
    @Query('country') country?: string,
    @Query('state') state?: string,
    @Query('lga') lga?: string,
    @Query('zone') zone?: string,
  ) {
    return this.adminService.getDeliveryPrices(country, state, lga,zone);
  }

  @Delete('delivery-price/:id')
  async deleteDeliveryPrice(@Param('id') id: string) {
    return this.adminService.deleteDeliveryPrice(id);
  }
  
  @Get('site-settings')
  async getSiteSettings() {
    return this.adminService.getSiteSettings();
  }
  
  @Patch('site-settings')
  async updateSiteSettings(@Body() dto: SiteSettingsDTO) {
    return this.adminService.updateSiteSettings(dto);
  }

  // getUsersByMany
  @Post('users')
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'page', required: false })
@ApiBody({type:UserDTO})
  async getUsersByMany(@Query() query: any,@Body() userDto: UserDTO) {
    return this.adminService.getUsersByMany(userDto,query);
  }

  // edit user
  @Patch('users/:id')
  async editUser(@Param('id') id: string, @Body() dto: UserSqlModel) {
    return this.adminService.editUser(id, dto);
  }

  @Post('send-email')
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: AdminSendEmailDTO })
  @UseInterceptors(FilesInterceptor('attachments'))
  async sendEmail(
    @Body() dto: AdminSendEmailDTO,
    @UploadedFiles() attachments: any[],
  ) {
    return this.adminService.sendEmail(dto, attachments);
  }

}
