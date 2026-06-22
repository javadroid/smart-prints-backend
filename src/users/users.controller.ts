import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard, RolesGuard } from '@app/guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { UserType } from '@app/enum';
import { Roles } from '@app/decorator';
import { UserSqlService } from './user-sql.service';
import { getSqlMetadata, serviceResponse } from '@app/service';

@ApiTags('users')
@ApiBearerAuth('access-token')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
export class UsersController {
  constructor(
    private userSqlService: UserSqlService,
  ) {}

  @Get('')
  @ApiOperation({ summary: 'Get all users' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    type: Number,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of users per page',
    type: Number,
  })
  async findAll(@Query() query: any) {
    const { limit = 10, page = 1 } = query;
    const skip = (page - 1) * limit;
    
    const [findall, total] = await (this.userSqlService as any).userRepository.findAndCount({
      take: limit,
      skip: skip,
    });
    
    return serviceResponse({
      data: findall,
      message: "Users retrieved successfully",
      status: true,
      metadata: await getSqlMetadata({
        model: (this.userSqlService as any).userRepository,
        query,
        querys: {},
      }),
    });
  }
}
