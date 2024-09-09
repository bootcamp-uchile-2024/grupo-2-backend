import { Test, TestingModule } from '@nestjs/testing';
import { TiposPersonajesService } from './tipos-personajes.service';

describe('TiposPersonajesService', () => {
  let service: TiposPersonajesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposPersonajesService],
    }).compile();

    service = module.get<TiposPersonajesService>(TiposPersonajesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
