import { Test, TestingModule } from '@nestjs/testing';
import { PerfilesController } from './perfiles.controller';
import { PerfilesService } from './perfiles.service';

describe('PerfilesController', () => {
  let controller: PerfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilesController],
      providers: [PerfilesService],
    }).compile();

    controller = module.get<PerfilesController>(PerfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
