import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsDate, ValidateNested, IsEnum } from 'class-validator';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsEmail, IsNumber, IsArray } from 'class-validator';
import { CreatePedidoCervezaDto } from './create-pedido-cervezas.dto';
import { estadoPedidos } from 'src/enum/estado-pedidos';

export class UpdatePedidoDto {
  
  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 2, description: 'ID de la nueva dirección de entrega', required: false })
  public id_direccion?: number;

  @IsEnum(estadoPedidos, { message: 'Estado debe ser uno de los valores permitidos' })
  @ApiProperty({ example: 'Pagado', description: 'Estado del pedido', enum: estadoPedidos })
  public estado: string;

}
