import { Controller, Get, Post, Body, Patch, Param, UseGuards, Req } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { EstadoUsuario, UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiParam } from '@nestjs/swagger';
import { Credencial } from './dto/credencial.dto';
import { CreateUsuarioInvitadoDto } from './dto/create-usuarioInvitado.dto';
import { Contrasena } from './dto/contrasena.dto';
import { AutorizacionGuard } from 'src/common/autenticacion.guard';
import { estado } from 'src/cervezas/dto/create-cerveza.dto';

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

  @ApiResponse({ status: 201, description: 'Usuario Creado' })
  @ApiResponse({ status: 404, description: 'No se pudo crear el usuario' })
  @Post('invitado')
  @ApiBody({ type: CreateUsuarioInvitadoDto })
  createInvitado(@Body() createUsuarioInvitadoDto: CreateUsuarioInvitadoDto) {
    return this.usuariosService.createInvitado(createUsuarioInvitadoDto);
  }

  @Post('/login')
  login(@Body() credenciales: Credencial) {
    return this.usuariosService.login(credenciales);
  }

  @ApiBearerAuth()
  @UseGuards(AutorizacionGuard)
  @ApiBody({ type: Contrasena })
  @Patch('/password')
  updateContrasena(@Req() request, @Body() contrasenas: Contrasena) {
    return this.usuariosService.updateContrasena(contrasenas, request.infoUsuario);
  }
  
  @ApiResponse({ status: 200, description: 'Usuarios encontrados' })
  @ApiResponse({ status: 404, description: 'No se encontraron usuarios' })
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Usuario encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el usuario' })
  @ApiParam({ name: 'Rut', description: 'RUT del usuario', required: true })
  @Get(':Rut')
  findOne(@Param('Rut') rut: string) {
    return this.usuariosService.findOne(rut);
  }
  
  @ApiResponse({ status: 200, description: 'Usuario editado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar el usuario' })
  @Patch(':rut')
  update(@Param('rut') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @ApiResponse({ status: 200, description: 'Usuario editado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar el usuario' })
  @Patch(':rut/estado')
  updateEstado(@Param('rut') id: string, @Body() estado: EstadoUsuario) {
    return this.usuariosService.updateIsActive(id, estado);
  }

  
  /*
  @ApiResponse({ status: 200, description: 'Usuario eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede eliminar el usuario' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(id);
  }*/
}
