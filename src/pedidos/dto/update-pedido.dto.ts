import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsDate, ValidateNested, IsEnum } from 'class-validator';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsEmail, IsNumber, IsArray } from 'class-validator';
import { CreatePedidoCervezaDto } from './create-pedido-cervezas.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
  
  @IsOptional()
  @IsDate()
  @ApiProperty({ example: '2024-12-23', description: 'Fecha de entrega del pedido', required: false })
  public fecha_entrega?: Date;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 2, description: 'ID de la nueva dirección de entrega', required: false })
  public id_direccion?: number;

  @IsOptional()
  @IsArray()
  @ApiProperty({ type: [CreatePedidoCervezaDto], description: 'Lista de cervezas y cantidades', required: false })
  public cervezas?: CreatePedidoCervezaDto[];

  @IsOptional()
  @IsEmail()
  @ApiProperty({ example: 'correo@ejemplo.com', description: 'Correo del comprador', required: false })
  public correo_comprador?: string;

  @IsOptional()
  @ApiProperty({ example: '987654321', description: 'Teléfono del comprador', required: false })
  public telefono_comprador?: string;
}
