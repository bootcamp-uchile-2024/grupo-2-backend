import { Carrito } from "src/carrito/entities/carrito.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";

@Entity({name: 'Pedido_Cerveza'})
export class Pedido_Cerveza {
    
    @PrimaryColumn()
    public id_pedido: number;

    @PrimaryColumn()
    public id_cerveza: number;

    @Column()
    public cantidad: number;

    @Column()
    public precio: number;

    @ManyToOne(() => Pedido)
    @JoinColumn({name: 'id_pedido'})
    Pedido: Pedido;

    @OneToOne(() => Cerveza)
    @JoinColumn({name: 'id_cerveza'})
    cerveza: Cerveza;
}

