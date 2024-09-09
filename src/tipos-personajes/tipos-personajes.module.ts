import { Module } from '@nestjs/common';
import { TiposPersonajesService } from './tipos-personajes.service';
import { TiposPersonajesController } from './tipos-personajes.controller';

@Module({
  controllers: [TiposPersonajesController],
  providers: [TiposPersonajesService],
})
export class TiposPersonajesModule {}
