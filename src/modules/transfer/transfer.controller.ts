import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { ResellerDTO, OperatorDTO, PlayerDTO } from 'src/modules/transfer/transfer.model';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';
import { ApiOperation } from '@nestjs/swagger';

@Controller('transfer')
@UseInterceptors(LoggerInterceptor)
export class TransferController {

    constructor(private readonly transferService: TransferService) { }

    // @Get('getHello')
    // @ApiOperation({ summary: 'Get Hello' })
    // getHello(): string {
    //     return this.transferService.getHello();
    // }

    @Post('create/reseller')
    @ApiOperation({ summary: 'Create Reseller' })
    async createReseller(@Body() reseller: ResellerDTO) {
        this.transferService.createAccount<ResellerDTO>(reseller);
    }

    @Post('create/operator')
    @ApiOperation({ summary: 'Create Operator' })
    async createOperator(@Body() operator: OperatorDTO) {
        this.transferService.createAccount<OperatorDTO>(operator);
    }

    @Post('create/player')
    @ApiOperation({ summary: 'Create Player' })
    async createPlayer(@Body() player: PlayerDTO) {
        this.transferService.createAccount<PlayerDTO>(player);
    }
}
