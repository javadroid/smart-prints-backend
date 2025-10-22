import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';
import { ApiBearerAuth } from '@nestjs/swagger';

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
}
