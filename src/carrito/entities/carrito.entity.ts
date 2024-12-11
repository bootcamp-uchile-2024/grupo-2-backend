import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Pedido_Cerveza } from "src/pedidos/entities/pedido_cervezas.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Carrito'})
export class Carrito {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public total_a_pagar: number;

    @OneToMany(() => Pedido_Cerveza, (p) => p.Pedido)
    pedido_cervezas : Pedido_Cerveza[];
   
}