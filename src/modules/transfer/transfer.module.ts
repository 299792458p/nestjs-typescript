import { TransferService } from './transfer.service';
import { TransferController } from './transfer.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [TransferController],
    providers: [TransferService]
})
export class TransferModule { }
