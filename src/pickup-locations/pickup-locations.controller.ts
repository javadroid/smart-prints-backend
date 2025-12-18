import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PickupLocationsService } from './pickup-locations.service';
import { PickupLocationDTO } from '@app/dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Pickup Locations')
@Controller('pickup-locations')
export class PickupLocationsController {
  constructor(private readonly pickupLocationsService: PickupLocationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new pickup location' })
  @ApiResponse({ status: 201, description: 'The pickup location has been successfully created.' })
  create(@Body() createPickupLocationDto: PickupLocationDTO) {
    return this.pickupLocationsService.create(createPickupLocationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pickup locations' })
  @ApiResponse({ status: 200, description: 'Return all pickup locations.' })
  findAll() {
    return this.pickupLocationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a pickup location by id' })
  @ApiResponse({ status: 200, description: 'Return the pickup location.' })
  findOne(@Param('id') id: string) {
    return this.pickupLocationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a pickup location' })
  @ApiResponse({ status: 200, description: 'The pickup location has been successfully updated.' })
  update(@Param('id') id: string, @Body() updatePickupLocationDto: PickupLocationDTO) {
    return this.pickupLocationsService.update(id, updatePickupLocationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pickup location' })
  @ApiResponse({ status: 200, description: 'The pickup location has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.pickupLocationsService.remove(id);
  }
}
