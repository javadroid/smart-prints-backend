import { Body, Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WalletService } from './wallet.service';
import { RequestWithdrawalDTO } from '@app/dto';
import { JwtAuthGuard } from '@app/guard';

@ApiTags('Wallet')
@ApiBearerAuth('access-token')
@Controller('wallet')
@UseGuards(JwtAuthGuard)
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('withdraw')
  @ApiOperation({ summary: 'Request a withdrawal' })
  @ApiBody({ type: RequestWithdrawalDTO })
  requestWithdrawal(@Req() req: any, @Body() requestWithdrawalDto: RequestWithdrawalDTO) {
    return this.walletService.requestWithdrawal(req.user._id, requestWithdrawalDto);
  }

  @Get('my-wallet')
  @ApiOperation({ summary: 'Get my wallet details' })
  getMyWallet(@Req() req: any) {
    return this.walletService.getWallet(req.user._id);
  }
}
