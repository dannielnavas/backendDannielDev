import { Test, TestingModule } from '@nestjs/testing';
import { DevtopostController } from './devtopost.controller';

describe('DevtopostController', () => {
  let controller: DevtopostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevtopostController],
    }).compile();

    controller = module.get<DevtopostController>(DevtopostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
