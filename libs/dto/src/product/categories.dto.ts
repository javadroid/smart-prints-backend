
import { ApiProperty } from "@nestjs/swagger";


export class CategoryDto {
    @ApiProperty({ description: 'Category name', example: 'Fruits & veggies',})
  readonly name: string;

    @ApiProperty({ description: 'Category description', example: 'Fresh fruits at your disposal' })
  readonly description?: string; 

    @ApiProperty({ description: 'Category image URL', example: 'http://example.com/category.jpg' })
  readonly imageUrl?: string; 

    @ApiProperty({ description: 'Category ID', example: 'cat123' })
  readonly id: string; 

    @ApiProperty({ description: 'Category slug', example: 'tubers' })
  readonly slug: string;

    @ApiProperty({ description: 'Indicates if the category can be added to the basket', example: true })
  addToBasket?: boolean;

  

}