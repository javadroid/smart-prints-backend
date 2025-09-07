
import { ApiProperty } from "@nestjs/swagger";


export class CategoriesDto {
 
  @ApiProperty({ description: 'Category name', example: 'Electronics' })
name: string;

  

}