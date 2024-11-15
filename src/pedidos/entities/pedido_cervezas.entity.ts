import { Carrito } from "src/carrito/entities/carrito.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";

@Entity({name: 'Pedido_Cerveza'})
export class Pedido_Cerveza {
    @PrimaryColumn()
    public id_carrito: number;

    @PrimaryColumn()
    public id_cerveza: number;

    @Column()
    public cantidad: number;

    @ManyToOne(() => Carrito)
    @JoinColumn({name: 'id_carrito'})
    carrito: Carrito;

    @OneToOne(() => Cerveza)
    @JoinColumn({name: 'id_cerveza'})
    cerveza: Cerveza;
}

