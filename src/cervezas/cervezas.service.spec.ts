import { Test, TestingModule } from '@nestjs/testing';
import { CervezasService } from './cervezas.service';

describe('CervezasService', () => {
  let service: CervezasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CervezasService],
    }).compile();

    service = module.get<CervezasService>(CervezasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
