import { ApiProperty } from "@nestjs/swagger";
import { ProductColorDto } from "./product.dto";

export class CartDto {
  @ApiProperty({ description: 'MongoDB Object ID of the item', required: false })
  _id?: string;

  @ApiProperty({ description: 'Item ID (client-side)', example: 'item_123' })
  id: string;

  @ApiProperty({ description: 'User ID who owns the cart item', example: 'user_123' })
  userID: string;

  @ApiProperty({ description: 'Product ID being added to the cart', example: 'prod_456' })
  productID: string;

  @ApiProperty({ description: 'Name of the product', example: 'Cool T-Shirt' })
  productName: string;

  @ApiProperty({ description: 'Selected color of the product',  })
  color: ProductColorDto;

  @ApiProperty({ description: 'Price of the product', example: 29.99 })
  price: number;

  @ApiProperty({ description: 'URL to the design/mockup image', example: 'https://example.com/image.png' })
  designImage: string;

  @ApiProperty({ description: 'Optional metadata (e.g., size, custom notes)', required: false })
  metadata?: any;
}
