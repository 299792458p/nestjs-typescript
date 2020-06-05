import { Test, TestingModule } from '@nestjs/testing';
import { TransferService } from './transfer.service';
import { TransferController } from './transfer.controller';

describe('TransferController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [TransferController],
      providers: [TransferService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<TransferController>(TransferController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
