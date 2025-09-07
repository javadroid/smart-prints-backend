import { ApiProperty } from "@nestjs/swagger";
import { CategoryDto } from "./categories.dto";
import { ProductStatusEnum } from "@app/enum";
export class RatingDto {
  @ApiProperty({ description: 'Rating given by the user for the ride', example: '4.5' })
  rating: number;

  @ApiProperty({ description: 'Feedback given by the user for the ride', example: 'Great ride!' })
  feedback: string;
  @ApiProperty({ description: 'User _id of the user who gave the rating', example: '1234567890' })
  userID: string;

  @ApiProperty({ description: 'Date of the rating', example: '2025-03-22T08:30:00Z' })
 date:Date 

}


export class ProductDto {
    _id:string
    @ApiProperty({ description: 'Product ID', example: 'prod123' })
     id: string;

    @ApiProperty({ description: 'Product name', example: 'Sample Product' })
   name: string;

    @ApiProperty({ description: 'Product description', example: 'This is a sample product.' })
   description: string;

    @ApiProperty({ description: 'Product price', example: 28.33 })
   price: number;

    @ApiProperty({ description: 'Product category ID', example: '6568zsdsadD' })
   categoryID: string;

    @ApiProperty({ description: 'quantity', example: 5 })
   quantity: number;

    @ApiProperty({ description: 'Product image URL', example:[ 'http://example.com/image.jpg'] })
   imageUrls?: string[]; // Optional field for product image URL

  @ApiProperty({ type:[RatingDto], description: 'Product rating',  })
     rating?: RatingDto[]; 

    @ApiProperty({  description: 'Measurement ooh',  example:"'kg','litre','count','pack'"     })
    measurement:string

    @ApiProperty({ description: 'distance', example: 200 })
     distance?: number; 

    @ApiProperty({ description: 'status', enum: ProductStatusEnum, example: ProductStatusEnum.PENDING }) 
     status?:string
   
   
    @ApiProperty({ description: 'Farm ID where the product is sourced', example: 'farm123' })
  farmID: string
  @ApiProperty({ description: 'Product type', example: ['vegetable', 'fruit'] })
  type: string[];

}