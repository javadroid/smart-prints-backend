import { Module } from '@nestjs/common';
import { DesignController } from './designs.controller';
import { DesignService } from './designs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesignSqlModel } from '@app/sql-schema/design.sql-schema';
import { DesignSqlService } from './design-sql.service';

@Module({
  imports: [TypeOrmModule.forFeature([DesignSqlModel])],
  controllers: [DesignController],
  providers: [ DesignSqlService],
  exports: [DesignSqlService]
})
export class DesignsModule {}
