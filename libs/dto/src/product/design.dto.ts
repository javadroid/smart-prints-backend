import { ApiProperty } from "@nestjs/swagger";


export class DesignDto {
    @ApiProperty({ description: 'Design ID', example: 'ord123' })
     id: string;

    @ApiProperty({ description: 'Name', example: 'Name' })
     name: string;

    @ApiProperty({ description: 'url', example: 'http://example.com/image.jpg' })
     url: string;

    @ApiProperty({ description: 'User ID', example: 'user_123' })
     userID: string;
    
    }