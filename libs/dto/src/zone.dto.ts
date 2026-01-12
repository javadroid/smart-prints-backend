import { ApiProperty } from '@nestjs/swagger';

export class ZoneDto {
  @ApiProperty({ description: 'Zone name' })
  name: string;

  @ApiProperty({ description: 'Local Government Area' })
  lga: string;

  @ApiProperty({ description: 'State' })
  state: string;
}