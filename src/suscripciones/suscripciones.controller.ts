import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuscripcionesService } from './suscripciones.service';
import { CreateSuscripcioneDto } from './dto/create-suscripcione.dto';
import { UpdateSuscripcioneDto } from './dto/update-suscripcione.dto';

@Controller('suscripciones')
export class SuscripcionesController {
  constructor(private readonly suscripcionesService: SuscripcionesService) {}

  @Post()
  create(@Body() createSuscripcioneDto: CreateSuscripcioneDto) {
    return this.suscripcionesService.create(createSuscripcioneDto);
  }

  @Get()
  findAll() {
    return "modulo suscripciones";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suscripcionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuscripcioneDto: UpdateSuscripcioneDto) {
    return this.suscripcionesService.update(+id, updateSuscripcioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suscripcionesService.remove(+id);
  }
}
