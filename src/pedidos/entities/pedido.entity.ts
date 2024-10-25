import { estadoPedidos } from "src/enum/estado-pedidos";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Pedido_Cerveza } from "./pedido_cervezas.entity";

@Entity({name: 'Pedido'})
export class Pedido {

    @PrimaryColumn()
    public id: number; 

    @Column()
    public estado: estadoPedidos;
   
    @Column()
    public fecha_ingreso: Date;
   
    @Column()
    public direccion_entrega: string; 
   
    @Column()
    public rut_comprador: string;
   
    @Column()
    public fecha_entrega: Date;

    @OneToMany(() => Pedido_Cerveza, (pedido_cervezas) => pedido_cervezas.id_pedido )
    pedido_cervezas: Pedido_Cerveza[];

}
