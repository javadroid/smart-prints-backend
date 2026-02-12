import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class AdminSendEmailDTO {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  to: string;

  @ApiProperty({ example: 'Hello from Admin' })
  @IsString()
  subject: string;

  @ApiProperty({ example: 'This is a message from the admin.' })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiProperty({ example: '<h1>Hello</h1><p>This is a message from the admin.</p>' })
  @IsOptional()
  @IsString()
  html?: string;

  @ApiProperty({ type: 'string', format: 'binary', isArray: true, required: false })
  attachments?: any[];
}
