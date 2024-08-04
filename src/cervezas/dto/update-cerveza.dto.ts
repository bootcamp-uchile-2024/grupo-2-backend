import { PartialType } from '@nestjs/mapped-types';
import { CreateCervezaDto } from './create-cerveza.dto';

export class UpdateCervezaDto extends PartialType(CreateCervezaDto) {}
