import { DatabaseModule } from './modules/database/database.module';
import { HealthModule } from './modules/health/health.module';
import { TransferModule } from './modules/transfer/transfer.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TransferController } from './modules/transfer/transfer.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    TransferModule,
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionName: 'account',
    }),
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(HealthModule, TransferController);
  }
}
