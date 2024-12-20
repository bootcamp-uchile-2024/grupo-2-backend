import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Direccione } from './entities/direccione.entity';
import { ApiParam } from '@nestjs/swagger';


@Controller('direcciones')
@ApiTags('Direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) { }

  @ApiResponse({ status: 201, description: 'Direccion Creada Exitosamente' })
  @ApiResponse({ status: 404, description: 'No se creo la Direccion' })
  @Post()
  @ApiBody({ type: CreateDireccioneDto })
  create(
    @Body() createDireccioneDto: CreateDireccioneDto,  
  ) {
    return this.direccionesService.create(createDireccioneDto);
  }

@ApiResponse({ status: 200, description: 'Estado de la dirección cambiado correctamente' })
@ApiResponse({ status: 404, description: 'Dirección no encontrada' })
@Patch(':id/cambiar-estado')
async cambiarEstado(@Param('id') id: number) {
  return this.direccionesService.cambiarEstadoDireccion(id);
}


@ApiResponse({ status: 200, description: 'Direcciones encontradas', type: [Direccione] })
@ApiResponse({ status: 404, description: 'No se encontraron direcciones para el usuario' })
@Get('usuario/:rut_usuario')
async findByRutUsuario(
  @Param('rut_usuario') rut_usuario: string,  
) {
  return this.direccionesService.findByRutUsuario(rut_usuario);
}


@ApiResponse({ status: 200, description: 'Dirección actualizada con éxito' })
@ApiResponse({ status: 404, description: 'No se encontró la dirección o usuario' })

@ApiBody({ type: UpdateDireccioneDto }) 
@Patch('usuario/:rut_usuario') 
async updateDireccion(
  @Param('rut_usuario') rut_usuario: string, 
  @Body() updateDireccioneDto: UpdateDireccioneDto, 
) {
  return this.direccionesService.updateByRutUsuario(rut_usuario, updateDireccioneDto); 
}


}
