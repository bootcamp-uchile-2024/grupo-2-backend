import { Test, TestingModule } from '@nestjs/testing';
import { SuscripcionesService } from './suscripciones.service';

describe('SuscripcionesService', () => {
  let service: SuscripcionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuscripcionesService],
    }).compile();

    service = module.get<SuscripcionesService>(SuscripcionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
