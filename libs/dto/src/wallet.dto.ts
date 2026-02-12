

import { ApiProperty } from '@nestjs/swagger';

export class WalletDTO {
  @ApiProperty({ description: 'Unique identifier for the wallet', required: false })
    _id?: string;

  @ApiProperty({ description: 'User ID associated with the wallet'  })
    userID: string;

    @ApiProperty({ description: 'Name of the wallet' })
    accountName: string;

  @ApiProperty({ description: 'Account number of the wallet' })
    accountNumber: string;

  @ApiProperty({ description: 'Current balance of the wallet', example: 1000 })
    balance: number;

  @ApiProperty({ description: 'Currency of the wallet' })
    currency: string;

  @ApiProperty({ description: 'Status of the wallet', required: false })
    status?: string;

  @ApiProperty({ description: 'Name of the bank', default:"GTBank" })
    bankName: string;

 @ApiProperty({ description: 'Bank code of the wallet', default:"058" })

    bankCode: string;

  @ApiProperty({ description: 'amount' })
    amount: number;

  @ApiProperty({ description: 'reason' })
    reason: string;

   
 
}

export class RequestWithdrawalDTO {
  @ApiProperty({ description: 'User ID associated with the wallet'  })
  userID: string;
  @ApiProperty({ description: 'Amount to withdraw', example: 5000 })
  amount: number;
  @ApiProperty({ description: 'Wallet ID associated with the withdrawal request'  })
  walletID: string;
}
