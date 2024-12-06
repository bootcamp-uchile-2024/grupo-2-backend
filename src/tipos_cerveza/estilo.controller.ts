import { Controller, Get, Param} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EstiloService } from './estilo.service';

@Controller('Estilo')
@ApiTags('Estilo')
export class estiloController {
  constructor(private readonly estiloService: EstiloService) {}

  @ApiResponse({ status: 200, description: 'Niveles de Amargor encontrados' })
  @ApiResponse({ status: 404, description: 'No se encontraron niveles de amargor' })
  @Get()
  findAll() {
    return this.estiloService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Nivel de Amargor encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el nivel de amargor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estiloService.findOne(+id);
  }
}
