import { Test, TestingModule } from '@nestjs/testing';
import { DevtopostService } from './devtopost.service';

describe('DevtopostService', () => {
  let service: DevtopostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevtopostService],
    }).compile();

    service = module.get<DevtopostService>(DevtopostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
