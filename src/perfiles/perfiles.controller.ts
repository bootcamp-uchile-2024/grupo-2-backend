import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { CreatePerfileDto } from './dto/create-perfile.dto';
import { UpdatePerfileDto } from './dto/update-perfile.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('perfiles')
export class PerfilesController {
  constructor(private readonly perfilesService: PerfilesService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Perfil creado de forma exitosa' })
  @ApiResponse({ status: 404, description: 'Error al crear perfil' })
  create(@Body() createPerfileDto: CreatePerfileDto, @Res() response: Response) {
    return this.perfilesService.create(createPerfileDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Todos los perfiles existentes' })
  @ApiResponse({ status: 404, description: 'Error al obtener perfiles' })
  findAll(@Res() response: Response) {
    return this.perfilesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Perfil obtenido de forma exitosa' })
  @ApiResponse({ status: 404, description: 'Error al obtener perfil' })
  findOne(@Param('id') id: string, @Res() response: Response) {
    return this.perfilesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'Perfil actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Error al actualizar perfil' })
  update(@Param('id') id: string, @Body() updatePerfileDto: UpdatePerfileDto, @Res() response: Response) {
    return this.perfilesService.update(+id, updatePerfileDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Perfil eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Error al eliminar el perfil' })
  remove(@Param('id') id: string, @Res() response: Response) {
    return this.perfilesService.remove(+id);
  }
}
