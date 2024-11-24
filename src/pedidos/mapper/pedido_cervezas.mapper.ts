import { UpdateCarritoDto } from "src/carrito/dto/update-carrito.dto";
import { Pedido_Cerveza } from "../entities/pedido_cervezas.entity";

export class PedidoCervezaMapper{

    static dtoToEntityList(id_pedido: number, dto: UpdateCarritoDto): Pedido_Cerveza[]{
        let pedido_cervezas: Pedido_Cerveza[] = [];
        for(const pcerveza of dto.items){
            const pedido = new Pedido_Cerveza();
            pedido.id_pedido = id_pedido;
            pedido.cantidad = pcerveza.cantidad;
            pedido.id_cerveza = pcerveza.id_cerveza;
            pedido_cervezas.push(pedido);
        }
        return pedido_cervezas;
    }
    
}