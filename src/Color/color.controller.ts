import { Controller, Get, Param} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ColorService } from './color.service';

@Controller('Color')
@ApiTags('Color')
export class ColorController {
  constructor(private readonly ColorService: ColorService) {}

  @ApiResponse({ status: 200, description: 'Niveles de Amargor encontrados' })
  @ApiResponse({ status: 404, description: 'No se encontraron niveles de amargor' })
  @Get()
  findAll() {
    return this.ColorService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Nivel de Amargor encontrado' })
  @ApiResponse({ status: 404, description: 'No se encontró el nivel de amargor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ColorService.findOne(+id);
  }
}
