import { Test, TestingModule } from '@nestjs/testing';
import { PerfilesService } from './perfiles.service';

describe('PerfilesService', () => {
  let service: PerfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfilesService],
    }).compile();

    service = module.get<PerfilesService>(PerfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
