import { ApiProperty } from '@nestjs/swagger';
import { TransactionStatus, TransactionType } from '@app/enum';

export class CreateTransactionDTO {
  @ApiProperty({ description: 'User ID associated with the transaction' })
  userID: string;

  @ApiProperty({ description: 'Amount of the transaction', example: 1000.00 })
  amount: number;

  @ApiProperty({
    description: 'Type of the transaction',
    enum: TransactionType,
    example: TransactionType.PAYMENT,
  })
  transactionType: TransactionType;

  @ApiProperty({
    description: 'Status of the transaction',
    enum: TransactionStatus,
    example: TransactionStatus.PENDING,
  })
  status: TransactionStatus;

  @ApiProperty({ description: 'Transaction reference', required: false })
  reference?: string;

  @ApiProperty({ description: 'Description of the transaction', required: false })
  description?: string;

  @ApiProperty({ description: 'Related Order ID', required: false })
  orderID?: string;
  @ApiProperty({ description: 'Related product ID', required: false })
  productID?: string;

  @ApiProperty({ description: 'Additional metadata', required: false })
  metadata?: Record<string, any>;
}

export class TransactionDTO extends CreateTransactionDTO {
  @ApiProperty({ description: 'Transaction ID' })
  id: string;

  @ApiProperty({ description: 'Creation date' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update date' })
  updatedAt: Date;
}
