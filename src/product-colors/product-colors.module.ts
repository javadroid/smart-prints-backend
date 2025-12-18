import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductColorSqlModel } from '@app/sql-schema';
import { ProductColorsController } from './product-colors.controller';
import { ProductColorsService } from './product-colors.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductColorSqlModel])],
  controllers: [ProductColorsController],
  providers: [ProductColorsService],
})
export class ProductColorsModule {}
