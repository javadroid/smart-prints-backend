import { ApiProperty } from '@nestjs/swagger';

export class ProductColorDTO {
  @ApiProperty({ description: 'Color Name' })
  name: string;

  @ApiProperty({ description: 'Color Hex Code' })
  hex: string;

  @ApiProperty({ description: 'CSS Class Name' })
  className: string;
}
