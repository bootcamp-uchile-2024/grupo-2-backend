import { Controller, Get, Param} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriaService } from './categoria.service';

@Controller('Categoria')
@ApiTags('Categoria')
export class CategoriaController {
  constructor(private readonly CategoriaService: CategoriaService) {}

  @ApiResponse({ status: 200, description: 'Niveles de Amargor encontrados' })
  @ApiResponse({ status: 404, description: 'No se encontraron niveles de amargor' })
  @Get()
  findAll() {
    return this.CategoriaService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Nivel de Amargor encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el nivel de amargor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CategoriaService.findOne(+id);
  }
}
