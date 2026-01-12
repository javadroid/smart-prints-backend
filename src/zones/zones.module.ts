import { Module } from '@nestjs/common';
import { ZoneService } from './zones.service';
import { ZoneController } from './zones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneSqlModel } from '@app/sql-schema/zone.sql-schema';
import { ZoneSqlService } from './zone-sql.service';

@Module({
  imports: [TypeOrmModule.forFeature([ZoneSqlModel])],
  controllers: [ZoneController],
  providers: [ZoneSqlService],
  exports: [ZoneSqlService]
})
export class ZonesModule {}