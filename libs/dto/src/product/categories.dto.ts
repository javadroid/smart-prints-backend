
import { ApiProperty } from "@nestjs/swagger";


class MockupsDto {
  @ApiProperty({ required: false })
  front?: string;

  @ApiProperty({ required: false })
  back?: string;

  @ApiProperty({ required: false })
  left?: string;

  @ApiProperty({ required: false })
  right?: string;
}

class DesignRectDto {
  @ApiProperty({ example: '27%' })
  top: string;

  @ApiProperty({ example: '33%' })
  left: string;

  @ApiProperty({ example: '37%' })
  width: string;

  @ApiProperty({ example: '50%' })
  height: string;
}

class DesignAreaDto {
  @ApiProperty({ required: false, type: DesignRectDto })
  front?: DesignRectDto;

  @ApiProperty({ required: false, type: DesignRectDto })
  back?: DesignRectDto;

  @ApiProperty({ required: false, type: DesignRectDto })
  left?: DesignRectDto;

  @ApiProperty({ required: false, type: DesignRectDto })
  right?: DesignRectDto;
}

export class CategoriesDto {

  @ApiProperty({ description: 'Category name', example: 'Electronics' })
  name: string;
  @ApiProperty({ description: 'id', example: 'Electronics' })
  id: string;
  @ApiProperty({ enum: ['custom', 'store'], description: 'Category type', example: 'custom' })
  type: string;
  @ApiProperty({ required: false, description: 'Category image URL or path', example: '/uploads/category.png' })
  image?: string;

  @ApiProperty({ type: [MockupsDto] })
  mockups?: MockupsDto[];

  @ApiProperty({ type: [DesignAreaDto] })
  designAreas?: DesignAreaDto[];

}
