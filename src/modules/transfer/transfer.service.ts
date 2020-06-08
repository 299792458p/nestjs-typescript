import { Injectable, Inject } from '@nestjs/common';
import * as chalk from 'chalk';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountDTO } from './transfer.model';
import { Account } from '../database/database.schema';

@Injectable()
export class TransferService {
    constructor(@Inject('ACCOUNT_MODEL') private accountModel: Model<Account>) { }

    getHello(): string {
        return 'Hello World!';
    }

    async findAll(): Promise<Account[]> {
        return this.accountModel.find().exec();
    }

    async createAccount<T extends AccountDTO>(account: T): Promise<Account> {
        console.log(chalk.greenBright.bgBlack(`Name = ${account.name}`));
        const createdAccount = new this.accountModel(account);
        return createdAccount.save();
    }
}
