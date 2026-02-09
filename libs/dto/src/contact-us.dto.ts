import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ContactUsDTO {
  @ApiProperty({ example: 'John Doe', description: 'Full Name of the sender' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'pending', description: 'Status of the contact message' })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email Address of the sender' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'I have a question about...', description: 'Message content' })
  @IsNotEmpty()
  @IsString()
  message: string;
}
