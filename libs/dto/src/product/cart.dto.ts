import { ApiProperty } from "@nestjs/swagger";

export class CartItemDto {
  @ApiProperty({ description: 'Product ID', example: 'prod_123' })
  productID: string;

  @ApiProperty({ description: 'Selected color (optional)', required: false })
  color?: string;

  @ApiProperty({ description: 'Selected size (optional)', required: false })
  size?: string;

  @ApiProperty({ description: 'Quantity', example: 1 })
  quantity: number;

  @ApiProperty({ description: 'Unit price', example: 25.0 })
  unitPrice: number;

  @ApiProperty({ description: 'Line total', example: 25.0 })
  lineTotal: number;
}

export class CartDto {
  @ApiProperty({ description: 'Cart ID', required: false })
  id?: string;

  @ApiProperty({ description: 'User ID', example: 'user_123' })
  userID: string;

  @ApiProperty({ description: 'Array of cart items', type: [CartItemDto] })
  items: CartItemDto[];

  @ApiProperty({ description: 'Cart subtotal', example: 100.0 })
  subtotal: number;

  @ApiProperty({ description: 'Tax (optional)', required: false, example: 0.0 })
  tax?: number;

  @ApiProperty({ description: 'Shipping (optional)', required: false, example: 0.0 })
  shipping?: number;

  @ApiProperty({ description: 'Total amount', example: 100.0 })
  total: number;
}
