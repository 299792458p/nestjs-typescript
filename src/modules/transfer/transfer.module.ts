import { TransferService } from './transfer.service';
import { TransferController } from './transfer.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { accountModelProviders } from '../database/model.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [TransferController],
    providers: [TransferService, ...accountModelProviders]
})
export class TransferModule { }
