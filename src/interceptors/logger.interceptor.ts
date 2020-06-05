import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as chalk from 'chalk';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(chalk.cyanBright.bgBlack('Before...'));
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(chalk.cyanBright.bgBlack(`After... ${Date.now() - now}ms`))),
      );
  }
}
