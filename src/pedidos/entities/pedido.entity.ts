import { ApiProperty } from "@nestjs/swagger";
import { estadoPedidos } from "src/enum/estado-pedidos";

export class Pedido {
    @ApiProperty()
    public id: number; //se puede usar como número de pedido
    //@ApiProperty()
    //public cervezas: Cerveza[]
    @ApiProperty()
    public estado: estadoPedidos // creado, aceptado, pagado, enviado, entregado, etc. Enum
    @ApiProperty()
    public fecha_ingreso: Date
    @ApiProperty()
    public direccion_entrega: string //puede ser local o envio a tercero
    @ApiProperty()
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @ApiProperty()
    public telefono_comprador: number //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @ApiProperty()
    public fecha_entrega: Date //entrega física o envío
}
