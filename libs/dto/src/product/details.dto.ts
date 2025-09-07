import { ApiProperty } from "@nestjs/swagger";
import { CategoriesDto } from "./categories.dto";


export class ProductDetailsDto {
  @ApiProperty({ description: 'Product ID', example: '12345' })
  readonly id: string;

  @ApiProperty({ description: 'Product name', example: 'Sample Product' })
  readonly name: string;

  @ApiProperty({ description: 'Product description', example: 'This is a sample product.' })
  readonly description: string;

  @ApiProperty({ description: 'Product price', example: `₦${28.33}` })
  readonly price: number;

  @ApiProperty({ description: 'Product category', type: CategoriesDto })
  readonly category: CategoriesDto;

  @ApiProperty({ description: 'Product availability', example: 'Out of stock' })
  readonly Instock: string;

    @ApiProperty({ description: 'Product image URL', example: 'http://example.com/image.jpg' })
    readonly imageUrl?: string; 

     @ApiProperty({ description: 'Location', example: 'Tudun Wada, Old Karu, Abuja' })
    readonly location: string

    @ApiProperty({ description: 'distance', example: `${200}km` })
    readonly distance?: number; 

    @ApiProperty({ description: 'Product quantity', example: 2 })
    readonly quantity?: number; 
}
   