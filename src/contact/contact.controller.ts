import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { ContactUsDTO } from '@app/dto';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: 'Send a contact us message' })
  @ApiBody({ type: ContactUsDTO })
  contactUs(@Body() contactUsDto: ContactUsDTO) {
    return this.contactService.contactUs(contactUsDto);
  }

  @Get()
  @ApiBearerAuth('access-token')
  @Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Get all contact messages (Admin only)' })
  findAll() {
    return this.contactService.findAll();
  }
}
