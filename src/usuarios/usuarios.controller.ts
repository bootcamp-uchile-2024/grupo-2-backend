import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, BadRequestException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('usuarios')
@ApiTags('Usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @ApiResponse({ status: 201, description: 'Usuario Creado' })
  @ApiResponse({ status: 404, description: 'No se pudo crear el usuario' })
  @Post()
  @ApiBody({ type: CreateUsuarioDto })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
    
  }
  
  
  @ApiResponse({ status: 200, description: 'Usuarios encontrados' })
  @ApiResponse({ status: 404, description: 'No se encontraron usuarios' })
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  
  @ApiResponse({ status: 200, description: 'Usuario encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el usuario' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }
  
  @ApiResponse({ status: 200, description: 'Usuario editado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar el usuario' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  /*
  @ApiResponse({ status: 200, description: 'Usuario eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede eliminar el usuario' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(id);
  }*/
}
