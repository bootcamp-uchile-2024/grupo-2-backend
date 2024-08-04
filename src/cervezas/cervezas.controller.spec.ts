import { Test, TestingModule } from '@nestjs/testing';
import { CervezasController } from './cervezas.controller';
import { CervezasService } from './cervezas.service';

describe('CervezasController', () => {
  let controller: CervezasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CervezasController],
      providers: [CervezasService],
    }).compile();

    controller = module.get<CervezasController>(CervezasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
