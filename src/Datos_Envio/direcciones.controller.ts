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
    @Body() createDireccioneDto: CreateDireccioneDto,  // El rut_usuario ya está en el DTO
  ) {
    return this.direccionesService.create(createDireccioneDto);
  }
//================================================================================================
@ApiResponse({ status: 200, description: 'Estado de la dirección cambiado correctamente' })
@ApiResponse({ status: 404, description: 'Dirección no encontrada' })
@Patch(':id/cambiar-estado')
async cambiarEstado(@Param('id') id: number) {
  return this.direccionesService.cambiarEstadoDireccion(id);
}

//================================================================================================
@ApiResponse({ status: 200, description: 'Direcciones encontradas', type: [Direccione] })
@ApiResponse({ status: 404, description: 'No se encontraron direcciones para el usuario' })
@Get('usuario/:rut_usuario')
async findByRutUsuario(
  @Param('rut_usuario') rut_usuario: string,  // Obtener el rut_usuario de los parámetros de la URL
) {
  return this.direccionesService.findByRutUsuario(rut_usuario);
}
//================================================================================================

@ApiResponse({ status: 200, description: 'Dirección actualizada con éxito' })
@ApiResponse({ status: 404, description: 'No se encontró la dirección o usuario' })
//@ApiParam({ name: 'RUT', description: 'RUT del usuario', example: '12345678-9' }) // Muestra "RUT" en Swagger
@ApiBody({ type: UpdateDireccioneDto }) // Define el DTO para los datos a actualizar
@Patch('usuario/:rut_usuario') // Ruta para actualizar una dirección, pasando el rut_usuario
async updateDireccion(
  @Param('rut_usuario') rut_usuario: string, // Recibe el rut_usuario
  @Body() updateDireccioneDto: UpdateDireccioneDto, // Datos para actualizar
) {
  return this.direccionesService.updateByRutUsuario(rut_usuario, updateDireccioneDto); // Llamada al servicio con rut_usuario
}
//================================================================================================
/*
@ApiResponse({ status: 200, description: 'Dirección eliminada correctamente' })
@ApiResponse({ status: 404, description: 'Dirección no encontrada' })
@ApiParam({ name: 'id', description: 'ID de la dirección' })
@Delete(':id') // Ruta para eliminar una dirección por ID
async remove(@Param('id') id: number) {
  return this.direccionesService.remove(id); // Llamamos al servicio para eliminar la dirección
}*/
}
