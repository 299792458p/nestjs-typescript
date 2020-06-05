import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/transfer/transfer.model';
import * as chalk from 'chalk';

@Injectable()
export class TransferService {
    getHello(): string {
        return 'Hello World!';
    }

    createUser(user: User): void {
        console.log(chalk.greenBright.bgBlack(`Name = ${user.name}`));
    }
}
