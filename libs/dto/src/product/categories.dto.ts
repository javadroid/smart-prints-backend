
import { ApiProperty } from "@nestjs/swagger";


export class CategoriesDto {
 
  @ApiProperty({ description: 'Category name', example: 'Electronics' })
name: string;
  @ApiProperty({ description: 'id', example: 'Electronics' })
id: string;
    @ApiProperty({enum:['custom' , 'store'] , description: 'Category type', example: 'custom' })
type: string;

}