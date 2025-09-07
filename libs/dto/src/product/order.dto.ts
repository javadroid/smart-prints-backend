
import { ApiProperty } from "@nestjs/swagger";


export class OrderDto {
    @ApiProperty({ description: 'Order ID', example: 'ord123' })
     id: string;

    @ApiProperty({ description: 'User ID', example: 'user456' })
     userID: string;

    @ApiProperty({ description: 'Product ID', example: 'prod789' })
     productID: string;

    @ApiProperty({ description: 'Quantity of the product', example: 2 })
     quantity: number;

    @ApiProperty({ description: 'Total price of the order', example: 120.50 })
     totalPrice: number;

    @ApiProperty({ description: 'Order status', example: 'pending' })
     status: string;

    @ApiProperty({ description: 'Shipping address ID', example: '123' })
     addressID: string;

        @ApiProperty({ description: 'Array of image URLs related to the order', example: ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'] })
    imageUrls?: string[];


    @ApiProperty({ description: 'Additional order details', example: { giftWrap: true, deliveryInstructions: "Leave at front door" }, required: false })
    orderDetails?: any;


}