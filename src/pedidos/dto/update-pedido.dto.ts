import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { IsNotEmpty, IsOptional, IsDate, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { estadoPedidos } from 'src/enum/estado-pedidos';
import { CreateDireccioneDto } from 'src/Datos_Envio/dto/create-direccione.dto';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
  
  @IsOptional()
  @IsEnum(estadoPedidos, { message: 'El estado debe ser uno de los valores permitidos' })
  @ApiProperty({ enum: estadoPedidos, description: 'Estado del pedido', required: false })
  public estado: estadoPedidos;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateDireccioneDto)
  @ApiProperty({ type: [CreateDireccioneDto], description: 'Dirección de entrega (solo editable si el estado es creado)', required: false })
  public direccion_entrega: Direccione;

  @IsOptional()
  @IsNotEmpty({ message: 'La lista de cervezas a comprar es requerida' })
  @ApiProperty({ description: 'Lista de cervezas a comprar (solo editable si el estado es creado)', required: false })
  public items: Cerveza[];

  // No agregamos rut_comprador ni fecha_ingreso porque no son modificables
}