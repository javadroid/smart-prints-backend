import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PickupLocationSqlModel } from '@app/sql-schema';
import { PickupLocationDTO } from '@app/dto';
import { serviceResponse } from '@app/service';

@Injectable()
export class PickupLocationsService {
  constructor(
    @InjectRepository(PickupLocationSqlModel)
    private readonly pickupLocationRepository: Repository<PickupLocationSqlModel>,
  ) {}

  async create(createPickupLocationDto: PickupLocationDTO) {
    try {
      const location = this.pickupLocationRepository.create(createPickupLocationDto);
      const savedLocation = await this.pickupLocationRepository.save(location);
      return serviceResponse({
        data: savedLocation,
        message: 'Pickup location created successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to create pickup location',
        status: false,
        data: error.message,
      });
    }
  }

  async findAll() {
    try {
      const locations = await this.pickupLocationRepository.find();
      return serviceResponse({
        data: locations,
        message: 'Pickup locations retrieved successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to retrieve pickup locations',
        status: false,
        data: error.message,
      });
    }
  }

  async findOne(id: string) {
    try {
      const location = await this.pickupLocationRepository.findOne({ where: { _id: id } });
      if (!location) {
        return serviceResponse({
          message: 'Pickup location not found',
          status: false,
        });
      }
      return serviceResponse({
        data: location,
        message: 'Pickup location retrieved successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to retrieve pickup location',
        status: false,
        data: error.message,
      });
    }
  }

  async update(id: string, updatePickupLocationDto: PickupLocationDTO) {
    try {
      const updateResult = await this.pickupLocationRepository.update(id, updatePickupLocationDto);
      if (updateResult.affected === 0) {
        return serviceResponse({
          message: 'Pickup location not found',
          status: false,
        });
      }
      const updatedLocation = await this.pickupLocationRepository.findOne({ where: { _id: id } });
      return serviceResponse({
        data: updatedLocation,
        message: 'Pickup location updated successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to update pickup location',
        status: false,
        data: error.message,
      });
    }
  }

  async remove(id: string) {
    try {
      const deleteResult = await this.pickupLocationRepository.delete(id);
      if (deleteResult.affected === 0) {
        return serviceResponse({
          message: 'Pickup location not found',
          status: false,
        });
      }
      return serviceResponse({
        message: 'Pickup location deleted successfully',
        status: true,
      });
    } catch (error) {
      return serviceResponse({
        message: 'Failed to delete pickup location',
        status: false,
        data: error.message,
      });
    }
  }
}
