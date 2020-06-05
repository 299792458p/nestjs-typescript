import { Injectable, NestMiddleware } from '@nestjs/common';
import * as chalk from 'chalk';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(chalk.redBright(req.body));
    next();
  }
}
