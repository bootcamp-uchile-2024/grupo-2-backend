import { Module } from '@nestjs/common';
import { ZonaService } from './zona.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZonaController } from './zona.controller';
import { Zona } from './entity/zona.entity';

@Module({
  controllers: [ZonaController],
  providers: [ZonaService],
  imports: [TypeOrmModule.forFeature([Zona])]
})
export class ZonaModule {}
