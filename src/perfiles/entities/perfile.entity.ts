import { ApiProperty } from "@nestjs/swagger";
import { PersonajeCerveza } from "src/enum/personajes";
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { CreateFormularioDto } from "src/formularios/dto/create-formulario.dto";
import { Formulario } from "src/formularios/entities/formulario.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

export class Perfile {

  public id: number;

  public nombre: PersonajeCerveza;

  public historialPedidos?: Pedido[];

  public suscripcion?: TipoSuscripcion;

  public recomendaciones?: [];

  public formularioPreferencias?: Formulario;

  public nivelUsuario: string;
}
