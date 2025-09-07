import { OtpType,  } from "@app/enum";
import { ApiProperty } from "@nestjs/swagger";

export class SelectDto {
  @ApiProperty({ description: 'OTP', example: '44035' })
  name: string;

}