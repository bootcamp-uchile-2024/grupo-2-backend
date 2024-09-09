import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposPersonajesService } from './tipos-personajes.service';
import { CreateTiposPersonajeDto } from './dto/create-tipos-personaje.dto';
import { UpdateTiposPersonajeDto } from './dto/update-tipos-personaje.dto';

@Controller('tipos-personajes')
export class TiposPersonajesController {
  constructor(private readonly tiposPersonajesService: TiposPersonajesService) {}

 /* @Post()
  create(@Body() createTiposPersonajeDto: CreateTiposPersonajeDto) {
    return this.tiposPersonajesService.create(createTiposPersonajeDto);
  }

  @Get()
  findAll() {
    return this.tiposPersonajesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposPersonajesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposPersonajeDto: UpdateTiposPersonajeDto) {
    return this.tiposPersonajesService.update(+id, updateTiposPersonajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposPersonajesService.remove(+id);
  } */
}
