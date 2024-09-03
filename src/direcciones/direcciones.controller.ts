import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';

@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) {}

  @Post()
  create(@Body() createDireccioneDto: CreateDireccioneDto) {
    return this.direccionesService.create(createDireccioneDto);
  }

  @Get()
  findAll() {
    return this.direccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.direccionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDireccioneDto: UpdateDireccioneDto) {
    return this.direccionesService.update(+id, updateDireccioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.direccionesService.remove(+id);
  }
}
