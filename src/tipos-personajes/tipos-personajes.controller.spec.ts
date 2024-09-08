import { Test, TestingModule } from '@nestjs/testing';
import { TiposPersonajesController } from './tipos-personajes.controller';
import { TiposPersonajesService } from './tipos-personajes.service';

describe('TiposPersonajesController', () => {
  let controller: TiposPersonajesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposPersonajesController],
      providers: [TiposPersonajesService],
    }).compile();

    controller = module.get<TiposPersonajesController>(TiposPersonajesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
