import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { NotificationGateway, NotificationService, SendMailService } from '@app/service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService,NotificationService,NotificationGateway,SendMailService],
  exports: [UsersService],
  controllers:[UsersController]
})
export class UsersModule {}
