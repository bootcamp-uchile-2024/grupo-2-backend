import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposPersonajesService } from './tipos-personajes.service';
import { CreateTiposPersonajeDto } from './dto/create-tipos-personaje.dto';
import { UpdateTiposPersonajeDto } from './dto/update-tipos-personaje.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('tipos-personajes')
@ApiTags('Personajes')
export class TiposPersonajesController {
  constructor(private readonly tiposPersonajesService: TiposPersonajesService) {}

 
}
