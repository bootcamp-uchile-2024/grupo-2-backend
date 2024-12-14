import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Headers } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { UpdateCarritoRutDto } from './dto/update-carritoRut.dto';

@Controller('carrito')
@ApiTags('Carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService, private readonly jwtService: JwtService) {}

  @ApiResponse({ status: 201, description: 'Carrito Creado - devuelve el id del carrito creado' })
  @ApiResponse({ status: 404, description: 'No se pudo crear el carrito' })
  @ApiBearerAuth()
  @Post()
  async create(@Req() request?) {
    if(request.headers.authorization) {
      const infoJwt = await this.jwtService.verifyAsync(request.headers.authorization.split(" ")[1]);
      request.infoUsuario = infoJwt;
    }
    return this.carritoService.create(request);
  }

  @ApiResponse({ status: 200, description: 'Carrito encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el carrito' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritoService.findOne(+id);
  }

  @ApiResponse({ status: 200, description: 'Carrito editado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar el carrito' })
  @Patch(':id/cervezas')
  updateCervezas(@Param('id') id: string, @Body() updateCarritoDto: UpdateCarritoDto) {
    return this.carritoService.updateCervezas(+id, updateCarritoDto);
  }

  @ApiResponse({ status: 200, description: 'Carrito editado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar el carrito' })
  @Patch(':id/Rut')
  updateRut(@Param('id') id: string, @Body() updateCarritoRutDto: UpdateCarritoRutDto) {
    return this.carritoService.updateRut(+id, updateCarritoRutDto);
  }

  @ApiResponse({ status: 200, description: 'Carrito eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede eliminar el carrito' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritoService.remove(+id);
  }
}
