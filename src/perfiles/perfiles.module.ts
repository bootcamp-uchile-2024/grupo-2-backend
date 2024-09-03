import { Module } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { PerfilesController } from './perfiles.controller';

@Module({
  controllers: [PerfilesController],
  providers: [PerfilesService],
})
export class PerfilesModule {}
