import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CreateCervezaDto, estado } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cervezas')
@ApiTags('Cervezas')
export class CervezasController {

  constructor(private readonly cervezasService: CervezasService) { }

  @ApiResponse({ status: 201, description: 'Cerveza creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Error al crear la cerveza' })
  @Post()
  @ApiBody({ type: CreateCervezaDto })
  create(@Body() createCervezaDto: CreateCervezaDto) {
    return this.cervezasService.create(createCervezaDto);
  }
  
  @Get()
  @ApiResponse({ status: 200, description: 'Cervezas encontradas' })
  @ApiResponse({ status: 404, description: 'No existen Cervezas en la Base de Datos' })
  @ApiQuery({ name: 'pagina', required: true, description: 'Se debe entregar la página en la que se encuentra el usuario' })
  @ApiQuery({ name: 'cantproductos', required: true, description: 'Se debe entregar la cantidad de productos que se quieren ver en la página' })
  findAll(@Query('pagina') pagina: number, @Query('cantproductos') cantproductos: number) {
   return this.cervezasService.findAll(pagina, cantproductos);
  }
  
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Cerveza encontrada' })
  @ApiResponse({ status: 400, description: 'Cerveza no encontrada' })
  findOne(@Param('id') id: string) {
   return this.cervezasService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Cerveza actualizada' })
  @ApiResponse({ status: 400, description: 'Cerveza no existe' })
  update(@Param('id') id: string, @Body() updateCervezaDto: UpdateCervezaDto) {
   return this.cervezasService.update(+id, updateCervezaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Cerveza eliminada' })
  @ApiResponse({ status: 400, description: 'Cerveza no existe' })
  remove(@Param('id') id: string) {
   return this.cervezasService.remove(+id);
  }

  @Post(':id/cargarimagen')
  @ApiResponse({ status: 200, description: 'imagen cargada' })
  @ApiResponse({ status: 400, description: 'Cerveza no existe' })
  @UseInterceptors(FileInterceptor('imagen'))
  async cargarImagenCerveza(@Param('id') id: string, @UploadedFile() file): Promise<string> {
    return this.cervezasService.cargarImagenCerveza(+id, file);
  }

  @Post(':id/actualizarimagen')
  @ApiResponse({ status: 200, description: 'imagen actualizada' })
  @ApiResponse({ status: 400, description: 'Cerveza no existe o no pudo cargarse el archivo' })
  @UseInterceptors(FileInterceptor('imagen'))
  async actualizarImagenCerveza(@Param('id') id: string, @UploadedFile() file: Express.Multer.File): Promise<string> {
    return this.cervezasService.actualizarImagenCerveza(+id, file);
  }

  @Post(':id/eliminarimagen')
  @ApiResponse({ status: 200, description: 'imagen eliminada' })
  @ApiResponse({ status: 400, description: 'Cerveza no existe' })
  eliminarImagenCerveza(@Param('id') id: string) {
   return this.cervezasService.eliminarImagenCerveza(+id);
  }

  @Patch(':id/actualizarestado')
  @ApiResponse({ status: 200, description: 'Cerveza actualizada' })
  @ApiResponse({ status: 400, description: 'Cerveza no existe' })
  actualizarEstado(@Param('id') id: string, @Body() estado: estado) {
   return this.cervezasService.actualizarEstado(+id, estado);
  }
  
}
