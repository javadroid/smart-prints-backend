import { ApiProperty } from '@nestjs/swagger';

export class DeliveryPriceDTO {
  @ApiProperty({ description: 'Country for delivery price' })
  country: string;

  @ApiProperty({ description: 'State for delivery price' })
  state: string;

  @ApiProperty({ description: 'Local Government Area for delivery price' })
  lga: string;

  @ApiProperty({ description: 'Delivery fee' })
  deliveryFee: number;

  @ApiProperty({ description: 'Additional fee for delivery' })
  additionalFee: number;
}