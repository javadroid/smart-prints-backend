import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { FlutterwaveService, NotificationGateway, NotificationService, SendMailService } from '@app/service';

@Module({
  controllers: [AdminController],
  providers: [AdminService,NotificationService,NotificationGateway,SendMailService, ],
})
export class AdminModule {}
