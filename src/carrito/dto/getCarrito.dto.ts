import { Pedido_Cerveza } from "src/pedidos/entities/pedido_cervezas.entity";

export class getCarrito {
    public id: number;
    public items: Pedido_Cerveza[];
    public rut_comprador: string;
}