import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDTO } from '@app/dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard, RolesGuard } from '@app/guard';
import { Roles } from '@app/decorator';
import { UserType } from '@app/enum';

@ApiTags('Transactions')
@ApiBearerAuth('access-token')
@Controller('transactions')

export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

 

  @Get()
  @ApiOperation({ summary: 'Get all transactions' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'userID', required: false, type: String })
  findAll(@Query() query: any) {
    return this.transactionsService.findAll(query);
  }

  @Get('top-users')
  @ApiOperation({ summary: 'Get top N users based on transactions' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  getTopUsers(@Query('limit') limit: number) {
    return this.transactionsService.getTopUsers(limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a transaction by ID' })
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a transaction' })
  @ApiBody({ type: CreateTransactionDTO })
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: Partial<CreateTransactionDTO>,
  ) {
    return this.transactionsService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  @Roles(UserType.ADMIN, UserType.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Delete a transaction' })
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(id);
  }

  @Get('stats')
 @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get transactions stats' })
  findStats(@Req() req: any) {
    return this.transactionsService.stats(req.user._id.toString());
  }
}
