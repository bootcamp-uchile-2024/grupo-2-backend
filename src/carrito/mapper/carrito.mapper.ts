import { getCarrito } from "../dto/getCarrito.dto";
import { Carrito } from "../entities/carrito.entity";

export class CarritoMapper{

    static entityToDto(entity: Carrito): getCarrito{
        const carrito = new getCarrito();
        carrito.id = entity.id;
        carrito.rut_comprador = entity.rut_comprador;
        carrito.items = entity.pedido_cervezas;
        return carrito;
    }

    static entityListToDto(entities: Carrito[]): getCarrito[]{
        return entities.map((entidad) => CarritoMapper.entityToDto(entidad));
    }
    
}