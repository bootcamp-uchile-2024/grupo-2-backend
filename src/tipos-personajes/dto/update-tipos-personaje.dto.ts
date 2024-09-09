import { PartialType } from '@nestjs/swagger';
import { CreateTiposPersonajeDto } from './create-tipos-personaje.dto';

export class UpdateTiposPersonajeDto extends PartialType(CreateTiposPersonajeDto) {}
