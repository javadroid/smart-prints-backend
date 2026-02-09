import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactUsSqlModel } from '@app/sql-schema';

@Module({
  imports: [TypeOrmModule.forFeature([ContactUsSqlModel])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
