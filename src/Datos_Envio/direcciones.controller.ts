import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('direcciones')
@ApiTags('Direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) { }

  @ApiResponse({ status: 201, description: 'Direccion Creada Exitosamente' })
  @ApiResponse({ status: 404, description: 'No se creo la Direccion' })
  @Post()
  @ApiBody({ type: CreateDireccioneDto })
  create(@Body() createDireccioneDto: CreateDireccioneDto) {
    return this.direccionesService.create(createDireccioneDto);
  }

  @ApiResponse({ status: 200, description: 'Direcciones encontradas' })
  @ApiResponse({ status: 404, description: 'No se encuentra ninguna direccion' })
  @Get()
  findAll() {
    return this.direccionesService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Direccion encontrada' })
  @ApiResponse({ status: 404, description: 'No se encuentra la direccion' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.direccionesService.findOne(+id);
  }

  @ApiResponse({ status: 200, description: 'Direcciones editada correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar la direccion' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDireccioneDto: UpdateDireccioneDto) {
    return this.direccionesService.update(+id, updateDireccioneDto);
  }

  @ApiResponse({ status: 200, description: 'Direcciones eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede eliminar la direccion' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.direccionesService.remove(+id);
  }
}
