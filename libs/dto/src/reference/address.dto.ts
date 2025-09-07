
import { ApiProperty } from "@nestjs/swagger";


export class AddressDto {
    @ApiProperty({ description: 'Address ID', example: 'addr123' })
     id: string;

    @ApiProperty({ description: 'User ID', example: 'user456' })
     userID: string;

    @ApiProperty({ description: 'Street address', example: '123 Main St' })
     street: string;

    @ApiProperty({ description: 'City', example: 'Anytown' })
     city: string;

    @ApiProperty({ description: 'State/Province', example: 'CA' })
     state: string;

    @ApiProperty({ description: 'Postal code', example: '90210' })
     postalCode: string;

    @ApiProperty({ description: 'Country', example: 'USA' })
     country: string;

    @ApiProperty({ description: 'Is this the default address?', example: true })
     isDefault: boolean;
}