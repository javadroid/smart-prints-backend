import { ApiProperty } from "@nestjs/swagger";


export class ReviewsDto {
  @ApiProperty({ description: 'Review ID', example: 'review123' })
  readonly id: string;

  @ApiProperty({ description: 'Product ID', example: '12345' })
  readonly productId: string;

  @ApiProperty({ description: 'User ID', example: 'user678' })
  readonly userId: string;

  @ApiProperty({ description: 'Review content', example: 'This product is amazing!' })
  readonly content: string;

  @ApiProperty({ description: 'Rating given by the user', example: 5 })
  readonly rating: number;

  @ApiProperty({ description: 'Date when the review was created', example: '2023-10-01T12:00:00Z' })
  readonly createdAt: Date;

 
}