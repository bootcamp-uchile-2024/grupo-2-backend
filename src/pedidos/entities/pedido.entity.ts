import { estadoPedidos } from "src/enum/estado-pedidos";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Pedido_Cerveza } from "./pedido_cervezas.entity";
import { Direccione } from "src/Datos_Envio/entities/direccione.entity";
import { ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'Pedido' })
export class Pedido {

    @PrimaryColumn()
    public id: number;

    @Column()
    public estado: estadoPedidos;

    @Column()
    public fecha_ingreso: Date;

    @Column()
    public rut_comprador: string;

    @Column()
    public fecha_entrega: Date;

    @Column()
    public documento: number;

    @Column()
    public id_carrito: number;

    @OneToMany(() => Pedido_Cerveza, (pedido_cervezas) => pedido_cervezas.id_carrito)
    pedido_cervezas: Pedido_Cerveza[];

    @ManyToOne(() => Direccione, { nullable: false })
    @JoinColumn({ name: 'direccion_entrega' })
    public direccion_entrega: Direccione;


}
