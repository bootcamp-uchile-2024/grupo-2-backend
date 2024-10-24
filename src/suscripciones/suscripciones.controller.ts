import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuscripcionesService } from './suscripciones.service';
import { CreateSuscripcioneDto } from './dto/create-suscripcione.dto';
import { UpdateSuscripcioneDto } from './dto/update-suscripcione.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('suscripciones')
@ApiTags('Suscripciones')
export class SuscripcionesController {
  constructor(private readonly suscripcionesService: SuscripcionesService) {}

  @ApiResponse({ status: 201, description: 'suscripción creada' })
  @ApiResponse({ status: 404, description: 'No se pudo crear la suscripción' })
  @Post()
  @ApiBody({ type: CreateSuscripcioneDto })
  create(@Body() createSuscripcioneDto: CreateSuscripcioneDto) {
    return this.suscripcionesService.create(createSuscripcioneDto);
  }

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

  @ApiResponse({ status: 200, description: 'Suscripción editada correctamente' })
  @ApiResponse({ status: 404, description: 'no existe la suscripcion que se desea actualizar' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuscripcioneDto: UpdateSuscripcioneDto) {
    return this.suscripcionesService.update(+id, updateSuscripcioneDto);
  }

  @ApiResponse({ status: 200, description: 'Suscripción eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'no existe la suscripcion que se desea eliminar' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suscripcionesService.remove(+id);
  }
}
