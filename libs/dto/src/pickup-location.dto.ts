import { ApiProperty } from '@nestjs/swagger';

export class PickupLocationDTO {
  @ApiProperty({ description: 'Location Name' })
  name: string;

  @ApiProperty({ description: 'Price' })
  price: number;

  @ApiProperty({ description: 'Address' })
  address: string;

  @ApiProperty({ description: 'City', required: false })
  city?: string;

  @ApiProperty({ description: 'State', required: false })
  state?: string;

  @ApiProperty({ description: 'Contact Phone', required: false })
  contactPhone?: string;

  @ApiProperty({ description: 'Is Active', default: true })
  isActive: boolean;
}
