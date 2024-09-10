import { ApiProperty } from "@nestjs/swagger";
import { PersonajeCerveza } from "src/enum/personajes";
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { CreateFormularioDto } from "src/formularios/dto/create-formulario.dto";
import { Formulario } from "src/formularios/entities/formulario.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

export class Perfile {

  @ApiProperty({ default: 1, description: 'ID único del perfil' })
  public id: number;

  @ApiProperty({ default: 'El Buena Onda', description: 'Personaje asociado al perfil basado en las preferencias', enum: PersonajeCerveza })
  public nombre: PersonajeCerveza;

  @ApiProperty({ default: [], description: 'Lista de pedidos asociados al perfil', type: [Pedido], })
  public historialPedidos?: Pedido[];

  @ApiProperty({ default: [], description: 'Lista de suscripciones asociadas al perfil', enum: TipoSuscripcion, })
  public suscripcion?: TipoSuscripcion;

  @ApiProperty({ default: [], description: 'Lista de recomendaciones personalizadas para el perfil' })
  public recomendaciones?: [];

  @ApiProperty({ default: CreateFormularioDto, description: 'Tipo de cervezas preferidas por el usuario', type: [CreateFormularioDto], })
  public formularioPreferencias?: Formulario;

  @ApiProperty({ default: 'Usuario intermedio', description: 'Nivel del usuario (ej: principiante, intermedio, experto)', })
  public nivelUsuario: string;
}
