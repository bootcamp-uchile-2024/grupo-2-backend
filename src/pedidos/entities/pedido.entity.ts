import { ApiProperty } from "@nestjs/swagger";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";
import { estadoPedidos } from "src/enum/estado-pedidos";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Pedido_Cerveza } from "./pedido_cervezas.entity";
import { Carrito } from "src/carrito/entities/carrito.entity";

@Entity({name: 'Pedido'})
export class Pedido {

    @ApiProperty()
    @PrimaryColumn()
    public id: number; //Autogenerado, se puede usar como número de pedido
   
    @ApiProperty({default:'Estado del pedido'})
    @Column()
    public estado: estadoPedidos // creado, aceptado, pagado, enviado, entregado, etc. Enum
   
    @ApiProperty({description:'Fecha ingreso del pedido'})
    @Column()
    public fecha_ingreso: Date //Autogenerado
   
    @ApiProperty({default:'Dirección de entrega del pedido'})
    @Column()
    public direccion_entrega: string //puede ser local o envio a tercerohecho // ====== se deberia modificar direccion ya que viene de una clase =====
   
    @ApiProperty({default:'Correo del comprador'}) // 
    @Column()
    public rut_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
   
    @ApiProperty({default:'Fecha de entrega del pedido'})
    @Column()
    public fecha_entrega: Date //entrega física o envío

    @OneToMany(() => Pedido_Cerveza, (pedido_cervezas) => pedido_cervezas.id_pedido )
    pedido_cervezas: Pedido_Cerveza[];

}
