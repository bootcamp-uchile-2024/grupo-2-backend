import { ApiProperty } from "@nestjs/swagger";
import { estadoPedidos } from "src/enum/estado-pedidos";

export class CreatePedidoDto {
    //@ApiProperty()
    //public cervezas: Cerveza[]
    @ApiProperty()
    public fecha_ingreso: Date
    @ApiProperty()
    public direccion_entrega: string //puede ser local o envio a tercero
    @ApiProperty()
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @ApiProperty()
    public telefono_comprador: number //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
}
