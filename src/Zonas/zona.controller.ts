import { Controller, Get, Param} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ZonaService } from './zona.service';

@Controller('Zona')
@ApiTags('Zona')
export class ZonaController {
  constructor(private readonly ZonaService: ZonaService) {}

  @ApiResponse({ status: 200, description: 'Niveles de Amargor encontrados' })
  @ApiResponse({ status: 404, description: 'No se encontraron niveles de amargor' })
  @Get()
  findAll() {
    return this.ZonaService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Nivel de Amargor encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el nivel de amargor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ZonaService.findOne(+id);
  }
}
