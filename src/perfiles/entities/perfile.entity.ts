import { PersonajeCerveza } from "src/enum/personajes";
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { Formulario } from "src/formularios/entities/formulario.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";

export class Perfile {

  public id: number;
  
  public nombre: PersonajeCerveza;

  public historialPedidos?: Pedido[];

  public suscripcion?: TipoSuscripcion;

  public recomendaciones?: [];

  public formularioPreferencias?: Formulario;

  public nivelUsuario: string;
}
