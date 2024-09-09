import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerfileDto } from './create-perfile.dto';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Suscripcione } from 'src/suscripciones/entities/suscripcione.entity';
import { PersonajeCerveza } from 'src/enum/personajes';
import { IsNotEmpty, IsString, IsOptional, IsArray, IsEnum } from 'class-validator';
import { TipoCerveza } from 'src/enum/tipos-cerveza';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { Formulario } from 'src/formularios/entities/formulario.entity';

export class UpdatePerfileDto extends PartialType(CreatePerfileDto) {

  @IsNotEmpty()
  @IsString()
  @IsEnum(PersonajeCerveza)
  @ApiProperty({ default: 'El Buena Onda (Pale Ale)', description: 'Personaje asociado al perfil basado en las preferencias', enum: PersonajeCerveza })
  public nombre: PersonajeCerveza;

  @IsOptional()
  @IsArray()
  @ApiProperty({ default: [], description: 'Lista de pedidos asociados al perfil', type: [Pedido], })
  public historialPedidos?: Pedido[];

  @IsOptional()
  @IsString()
  @ApiProperty({ default: "Plata Premium", description: 'Lista de suscripciones asociadas al perfil', enum: TipoSuscripcion, })
  public suscripciones?: TipoSuscripcion;

  @IsOptional()
  @IsArray()
  @IsEnum(TipoCerveza, { each: true })
  @ApiProperty({ default: ['Pale Ale'], description: 'Lista de recomendaciones personalizadas para el perfil', enum: TipoCerveza, type: [String], })
  public recomendaciones?: TipoCerveza[];

  @ApiProperty({ default: [], description: 'Respuesta del Formulario' })
    public formularioPreferencias: Formulario;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ default: 'Usuario intermedio', description: 'Nivel del usuario (ej: principiante, intermedio, experto)', })
  public nivelUsuario: string;
}
