import { ApiProperty } from "@nestjs/swagger";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";
import { estadoPedidos } from "src/enum/estado-pedidos";

export class Pedido {
    @ApiProperty()
    public id: number; //Autogenerado, se puede usar como número de pedido
    @ApiProperty({default:'ID del usuario que crea el pedido'}) // Modificacion hecha por mi
    public idUsuario: number; //relacionado con el usuario que lo crea
    @ApiProperty({default:'lista de cervezas del pedido'})
    public items: Cerveza[];
    @ApiProperty({default:'Estado del pedido'})
    public estado: estadoPedidos // creado, aceptado, pagado, enviado, entregado, etc. Enum
    @ApiProperty({description:'Fecha ingreso del pedido'})
    public fecha_ingreso: Date //Autogenerado
    @ApiProperty({default:'Dirección de entrega del pedido'})
    public direccion_entrega: string //puede ser local o envio a tercerohecho // ====== se deberia modificar direccion ya que viene de una clase =====
    @ApiProperty({default:'Correo del comprador'}) // 
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @ApiProperty({default:'Número telefónico del comprador'})
    public telefono_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @ApiProperty({default:'Fecha de entrega del pedido'})
    public fecha_entrega: Date //entrega física o envío
}
