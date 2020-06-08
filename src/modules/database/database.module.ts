import { Module } from '@nestjs/common';
import { mongodbProviders } from './mongodb.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './database.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }], 'account')],
    providers: [...mongodbProviders],
    exports: [...mongodbProviders]
})
export class DatabaseModule { }
