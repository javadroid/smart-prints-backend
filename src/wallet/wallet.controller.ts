import { Body, Controller, Post, Req, UseGuards, Get, Query, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { WalletService } from './wallet.service';
import { RequestWithdrawalDTO, WalletDTO } from '@app/dto';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';

@ApiTags('Wallet')
@ApiBearerAuth('access-token')
@Controller('wallet')
@UseGuards(JwtAuthGuard)
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  // createWallet
  @Post('create')
  @ApiOperation({ summary: 'Create a wallet' })
  @ApiBody({ type: WalletDTO })
  createWallet(@Body() walletDto: WalletDTO, @Req() req: any) {
    return this.walletService.createWallet(walletDto, req.user._id.toString());
  }
    // getWallet
    @Get('my-wallet')
    @ApiOperation({ summary: 'Get my wallet details' })
    getMyWallet(@Req() req: any) {
      return this.walletService.getWallet(req.user._id);
    }
  // requestWithdrawal
  @Post('withdraw')
  @ApiOperation({ summary: 'Request a withdrawal' })
  @ApiBody({ type: RequestWithdrawalDTO })
  requestWithdrawal(@Req() req: any, @Body() requestWithdrawalDto: RequestWithdrawalDTO) {
    return this.walletService.requestWithdrawal(requestWithdrawalDto);
  }
  // getWithdrawals
  @Get('withdrawals')
  @ApiOperation({ summary: 'Get my withdrawal requests' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  
  getWithdrawals(@Req() req: any, @Query() query: any) {
    return this.walletService.getWithdrawals(req.user._id, query);
  }

  //getAllWithdrawals
  @Get('withdrawals/all')
  @ApiOperation({ summary: 'Get all withdrawal requests' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  getAllWithdrawals(@Req() req: any, @Query() query: any) {
    return this.walletService.getAllWithdrawals(query);
  }


  // approveWithdrawal
  @Post('withdrawals/approve/:withdrawalId')
  @ApiParam({ name: 'withdrawalId', required: true, type: String })
  @ApiOperation({ summary: 'Approve a withdrawal request' })
 @Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  approveWithdrawal(@Req() req: any, @Param() params: any) {
    return this.walletService.approveWithdrawal(params.withdrawalId);
  }

  // paystack get all banks
  @Get('paystack/banks')
  @ApiOperation({ summary: 'Get all paystack banks' })
  getPaystackBanks() {
    return this.walletService.getPaystackBanks();
  }
  // paystack verify account number
  @Get('paystack/verify-account-number')
  @ApiOperation({ summary: 'Verify paystack account number' })
  @ApiQuery({ name: 'accountNumber', required: true, type: String })
  @ApiQuery({ name: 'bankCode', required: true, type: String })
  verifyPaystackAccountNumber(@Query() query: any) {
    return this.walletService.verifyPaystackAccountNumber(query.accountNumber, query.bankCode);
  }
}
