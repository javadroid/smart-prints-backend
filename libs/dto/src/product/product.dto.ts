import { ApiProperty } from "@nestjs/swagger";
import { CategoriesDto } from "./categories.dto";
import { ProductStatusEnum } from "@app/enum";

export class RatingDto {
  @ApiProperty({ description: 'Rating given by the user for the ride', example: 4.5 })
  rating: number;

  @ApiProperty({ description: 'Feedback given by the user for the ride', example: 'Great ride!' })
  feedback: string;

  @ApiProperty({ description: 'User _id of the user who gave the rating', example: '1234567890' })
  userID: string;

  @ApiProperty({ description: 'Date of the rating', example: '2025-03-22T08:30:00Z' })
  date: Date;
}

export class ProductColorDto {
  @ApiProperty({ example: 'White' })
  name: string;

  @ApiProperty({ example: '#FFFFFF' })
  hex: string;

  @ApiProperty({ example: 'bg-white' })
  className: string;
}

export class ProductSizeDto {
  @ApiProperty({ example: 'M' })
  name: string;

  @ApiProperty({ example: 'Medium' })
  label: string;

  @ApiProperty({ example: true })
  inStock: boolean;
}

export class MockupsDto {
  @ApiProperty({ required: false })
  front?: string;

  @ApiProperty({ required: false })
  back?: string;

  @ApiProperty({ required: false })
  left?: string;

  @ApiProperty({ required: false })
  right?: string;
}

export class DesignRectDto {
  @ApiProperty({ example: '27%' })
  top: string;

  @ApiProperty({ example: '33%' })
  left: string;

  @ApiProperty({ example: '37%' })
  width: string;

  @ApiProperty({ example: '50%' })
  height: string;
}

export class DesignAreaDto {
  @ApiProperty({ required: false, type: DesignRectDto })
  front?: DesignRectDto;

  @ApiProperty({ required: false, type: DesignRectDto })
  back?: DesignRectDto;

  @ApiProperty({ required: false, type: DesignRectDto })
  left?: DesignRectDto;

  @ApiProperty({ required: false, type: DesignRectDto })
  right?: DesignRectDto;
}

export class ProductDto {
  _id?: string;

  @ApiProperty({ description: 'Is the product featured', example: false, required: false })
  isFeatured?: boolean;
  @ApiProperty({ description: 'Product ID',  })
  id: string ;

  @ApiProperty({ description: 'Product name', example: 'Sample Product' })
  name: string;

  @ApiProperty({ description: 'Product description', example: 'This is a sample product.' })
  description?: string;

  // legacy field - keep for backward compatibility
  @ApiProperty({ description: 'Product price (legacy)', example: 28.33, required: false })
  price?: number;

  @ApiProperty({ description: 'Product base price', example: 25.0 })
  basePrice: number;

  @ApiProperty({ description: 'Product sale price', example: 20.0, required: false })
  salePrice?: number;

  @ApiProperty({ description: 'Product category ID (legacy)', example: '6568zsdsadD', required: false })
  categoryID?: string;

  @ApiProperty({ description: 'Product category', example: 'apparel' })
  category: string;

  @ApiProperty({ description: 'quantity', example: 5, required: false })
  quantity?: number;

  @ApiProperty({ description: 'Product mockups images', type: MockupsDto, required: false })
  mockups?: MockupsDto;

  @ApiProperty({ description: 'Design area configuration', type: DesignAreaDto, required: false })
  designArea?: DesignAreaDto;

  @ApiProperty({ description: 'Product image URLs (legacy)', example: ['http://example.com/image.jpg'], required: false })
  imageUrls?: string[]; // Optional field for product image URL

  @ApiProperty({ type: [ProductColorDto], description: 'Available colors for the product', required: false })
  availableColors?: ProductColorDto[];

  @ApiProperty({ type: [ProductSizeDto], description: 'Available sizes for the product', required: false })
  availableSizes?: ProductSizeDto[];

  @ApiProperty({ description: 'Size guide URL', required: false })
  sizeGuide?: string;

  @ApiProperty({ type: [RatingDto], description: 'Product rating', required: false })
  rating?: RatingDto[];

  @ApiProperty({ description: 'Measurement unit', example: "kg", required: false })
  measurement?: string;

  @ApiProperty({ description: 'distance', example: 200, required: false })
  distance?: number;

  @ApiProperty({ description: 'status', enum: ProductStatusEnum, example: ProductStatusEnum.PENDING, required: false })
  status?: string;

  

  @ApiProperty({ description: 'Product type', example: ['vegetable', 'fruit'], required: false })
  types?: string[];
   @ApiProperty({ description: 'Name of the product', enum:['custom' , 'store'] ,example:'custom'})
  type: string;

   @ApiProperty({ description: 'Image', })
  image: string;
}