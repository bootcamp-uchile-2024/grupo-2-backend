import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuscripcionesService } from './suscripciones.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('suscripciones')
@ApiTags('Suscripciones')
export class SuscripcionesController {
  constructor(private readonly suscripcionesService: SuscripcionesService) {}

  @ApiResponse({ status: 200, description: 'Suscripciones encontradas' })
  @ApiResponse({ status: 404, description: 'No se encontraron suscripciones' })
  @Get()
  findAll() {
    return this.suscripcionesService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Suscripción encontrada' })
  @ApiResponse({ status: 404, description: 'No se encontró la suscripción' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suscripcionesService.findOne(+id);
  }
}
