import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CreateCervezaDto, estado } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { getCerveza } from './dto/getCerveza.dto';

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
  @ApiResponse({ status: 200, description: 'Cervezas encontradas', type: [getCerveza] })
  @ApiResponse({ status: 404, description: 'No existen Cervezas en la Base de Datos' })
  @ApiQuery({ name: 'pagina', required: true, description: 'Se debe entregar la página en la que se encuentra el usuario' })
  @ApiQuery({ name: 'cantproductos', required: true, description: 'Se debe entregar la cantidad de productos que se quieren ver en la página' })
  @ApiQuery({ name: 'amargor', required: false, description: 'Se debe entregar la lista de ids de amargor seleccionados' })
  @ApiQuery({ name: 'estilo', required: false, description: 'Se debe entregar la lista de ids de estilo seleccionados' })
  @ApiQuery({ name: 'categoria', required: false, description: 'Se debe entregar la lista de ids de categoria seleccionadas' })
  @ApiQuery({ name: 'grados', required: false, description: 'Se debe entregar el número según el siguiente diccionario: {1: bajo, 2: medio, 3: alto}' })
  @ApiQuery({ name: 'color', required: false, description: 'Se debe entregar la lista de ids de colores seleccionados' })
  @ApiQuery({ name: 'origen', required: false, description: 'Se debe entregar la lista de ids de zonas seleccionadas' })  
  findAll(@Query('pagina') pagina: number, @Query('cantproductos') cantproductos: number, @Query('amargor') f_amargor: string[],
   @Query('estilo') f_estilo: number[], @Query('categoria') f_categoria: number[], @Query('grados') f_grados: number,
   @Query('color') f_color: number[], @Query('origen') f_origen: string[]) {
    if(f_grados && (f_grados<1 || f_grados > 3)){
      throw new HttpException('Los grados sólo pueden ser 1, 2 o 3 según diccionario', HttpStatus.BAD_REQUEST);
    };
    return this.cervezasService.findAll(pagina, cantproductos, f_amargor, f_estilo, f_categoria, f_grados, f_color, f_origen);
  }
  
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Cerveza encontrada', type: [getCerveza] })
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
