import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ZoneDto } from '@app/dto';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { ApiOperation, ApiBody, ApiParam, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';
import { ZoneSqlService } from './zone-sql.service';

@ApiTags("zone")
@ApiBearerAuth("access-token")

@Controller('zones')
export class ZoneController {
  constructor(private readonly zoneService: ZoneSqlService) {}

  @Post()
  @ApiOperation({ summary: "Create a new zone" })
  @ApiBody({
    type: ZoneDto,
    description: "Creating a new zone Details",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
  async create(@Body() zone: ZoneDto) {
    return this.zoneService.create(zone);
  }

  @Get()
  @ApiOperation({ summary: "Get all zones" })
  async findAll() {
    return this.zoneService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a zone by ID" })
  @ApiParam({
    name: "id",
    description: "The zone ID",
    type: String,
  })
  async findOne(@Param('id') id: string) {
    return this.zoneService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: "Update a zone" })
  @ApiParam({
    name: "id",
    description: "The zone ID",
    type: String,
  })
  @ApiBody({
    type: ZoneDto,
    description: "Updating zone details",
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
  async update(@Param('id') id: string, @Body() zone: ZoneDto) {
    return this.zoneService.update(id, zone);
  }

  @Delete(':id')
  @ApiOperation({ summary: "Delete a zone" })
  @ApiParam({
    name: "id",
    description: "The zone ID",
    type: String,
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
  async remove(@Param('id') id: string) {
    return this.zoneService.remove(id);
  }
}