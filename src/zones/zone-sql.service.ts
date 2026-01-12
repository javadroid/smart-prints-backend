import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ZoneSqlModel } from "@app/sql-schema/zone.sql-schema";
import { ZoneDto } from "@app/dto";
import {
  getSqlMetadata,
  ObjectReturnType,
  serviceResponse,
} from "@app/service";

@Injectable()
export class ZoneSqlService {
  constructor(
    @InjectRepository(ZoneSqlModel)
    private readonly zoneRepository: Repository<ZoneSqlModel>,
  ) {}

  async create(zone: ZoneDto): Promise<ObjectReturnType> {
    try {
      const newZone = this.zoneRepository.create({
        ...zone,
      });
      const savedZone = await this.zoneRepository.save(newZone);
      return serviceResponse({ status: true, message: "Zone created successfully", data: savedZone });
    } catch (error) {
      return serviceResponse({ status: false, message: error.message });
    }
  }

  async findAll(): Promise<ObjectReturnType> {
    try {
      const zones = await this.zoneRepository.find();
      return serviceResponse({ status: true, message: "Zones retrieved successfully", data: zones });
    } catch (error) {
      return serviceResponse({ status: false, message: error.message });
    }
  }

  async findOne(id: string): Promise<ObjectReturnType> {
    try {
      const zone = await this.zoneRepository.findOne({ where: { _id: id } });
      if (!zone) {
        throw new NotFoundException("Zone not found");
      }
      return serviceResponse({ status: true, message: "Zone retrieved successfully", data: zone });
    } catch (error) {
      return serviceResponse({ status: false, message: error.message });
    }
  }

  async update(id: string, zone: ZoneDto): Promise<ObjectReturnType> {
    try {
      const existingZone = await this.zoneRepository.findOne({ where: { _id: id } });
      if (!existingZone) {
        throw new NotFoundException("Zone not found");
      }
      await this.zoneRepository.update(existingZone._id, zone);
      const updatedZone = await this.zoneRepository.findOne({ where: { _id: id } });
      return serviceResponse({ status: true, message: "Zone updated successfully", data: updatedZone });
    } catch (error) {
      return serviceResponse({ status: false, message: error.message });
    }
  }

  async remove(id: string): Promise<ObjectReturnType> {
    try {
      const existingZone = await this.zoneRepository.findOne({ where: { _id: id } });
      if (!existingZone) {
        throw new NotFoundException("Zone not found");
      }
      await this.zoneRepository.delete(existingZone._id);
      return serviceResponse({
        status: true, message: "Zone deleted successfully",
      });
    } catch (error) {
      return serviceResponse({
        status: false, message: error.message,
      });
    }
  }
}