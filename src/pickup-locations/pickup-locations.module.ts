import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickupLocationSqlModel } from '@app/sql-schema';
import { PickupLocationsController } from './pickup-locations.controller';
import { PickupLocationsService } from './pickup-locations.service';

@Module({
  imports: [TypeOrmModule.forFeature([PickupLocationSqlModel])],
  controllers: [PickupLocationsController],
  providers: [PickupLocationsService],
})
export class PickupLocationsModule {}
