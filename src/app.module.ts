import { HealthModule } from './modules/health/health.module';
import { TransferModule } from './modules/transfer/transfer.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TransferController } from './modules/transfer/transfer.controller';

@Module({
  imports: [
    HealthModule,
    TransferModule
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(HealthModule, TransferController);
  }
}
