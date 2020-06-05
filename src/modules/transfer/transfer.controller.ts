import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { User } from 'src/modules/transfer/transfer.model';
import { LoggerInterceptor } from 'src/interceptors/logger.interceptor';
import { ApiOperation } from '@nestjs/swagger';

@Controller('transfer')
@UseInterceptors(LoggerInterceptor)
export class TransferController {

    constructor(private readonly transferService: TransferService) { }

    @Get('getHello')
    @ApiOperation({ summary: 'Get Hello' })
    getHello(): string {
        return this.transferService.getHello();
    }

    @Post('createUser')
    @ApiOperation({ summary: 'Create User' })
    async create(@Body() user: User) {
        this.transferService.createUser(user);
    }
}
