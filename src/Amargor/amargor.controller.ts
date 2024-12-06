import { Controller, Get, Param} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AmargorService } from './amargor.service';

@Controller('Amargor')
@ApiTags('Amargor')
export class AmargorController {
  constructor(private readonly amargorService: AmargorService) {}

  @ApiResponse({ status: 200, description: 'Niveles de Amargor encontrados' })
  @ApiResponse({ status: 404, description: 'No se encontraron niveles de amargor' })
  @Get()
  findAll() {
    return this.amargorService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Nivel de Amargor encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el nivel de amargor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amargorService.findOne(id);
  }
}
