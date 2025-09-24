import { Module } from '@nestjs/common';
import { DesignController } from './designs.controller';
import { DesignService } from './designs.service';

@Module({
  controllers: [DesignController],
  providers: [DesignService],
})
export class DesignsModule {}
