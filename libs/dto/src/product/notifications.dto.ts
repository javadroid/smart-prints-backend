import { ApiProperty } from "@nestjs/swagger";


export class NotificationsDto {
    @ApiProperty({ description: 'Notification ID', example: 'notif123' })
    readonly id: string;
    
    @ApiProperty({ description: 'User ID', example: 'user678' })
    readonly userId: string;
    
    @ApiProperty({ description: 'Notification message', example: 'Your order has been shipped!' })
    readonly message: string;
    
    @ApiProperty({ description: 'Date when the notification was created', example: '2023-10-01T12:00:00Z' })

    readonly createdAt: Date;

    @ApiProperty({ description: 'Read status of the notification', example: false })
    readonly isRead: boolean;

    @ApiProperty({ description: 'Type of notification', example: 'order' })
    readonly type: string;

    @ApiProperty({ description: 'Related order ID', example: 'order123', required: false })
    readonly orderId?: string;

   

    @ApiProperty({ description: 'Product price', example: `₦${28.33}`, required: false })
    readonly productPrice?: number;

    @ApiProperty({ description: 'Product weight', example: `${28.33}Kg`, required: false })
    readonly productWeight?: number;

}