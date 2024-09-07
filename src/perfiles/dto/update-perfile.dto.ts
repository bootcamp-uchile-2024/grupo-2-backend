import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerfileDto } from './create-perfile.dto';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Suscripcione } from 'src/suscripciones/entities/suscripcione.entity';
import { PersonajeCerveza } from 'src/enum/personajes';
import { IsNotEmpty, IsString, IsOptional, IsArray, IsEnum } from 'class-validator';
import { TipoCerveza } from 'src/enum/tipos-cerveza';

export class UpdatePerfileDto extends PartialType(CreatePerfileDto) {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ default: 'El Buena Onda', description: 'Personaje asociado al perfil basado en las preferencias', enum: PersonajeCerveza })
  public nombre: PersonajeCerveza;

  @IsOptional()
  @IsString()
  @ApiProperty({ default: [], description: 'Lista de pedidos asociados al perfil', type: [Pedido], })
  public historialPedidos?: Pedido[];

  @IsOptional()
  @IsString()
  @ApiProperty({ default: [], description: 'Lista de suscripciones asociadas al perfil', type: [Suscripcione], })
  public suscripciones?: Suscripcione;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ default: [], description: 'Lista de recomendaciones personalizadas para el perfil' })
  public recomendaciones?: [];

  @IsNotEmpty()
  @IsArray()
  @IsEnum(TipoCerveza, { each: true })
  @ApiProperty({ default: 'Cervezas artesanales', description: 'Tipo de cervezas preferidas por el usuario', enum: TipoCerveza, type: [String], })
  public formularioPreferencias: string[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ default: 'Usuario intermedio', description: 'Nivel del usuario (ej: principiante, intermedio, experto)', })
  public nivelUsuario: string;
}
