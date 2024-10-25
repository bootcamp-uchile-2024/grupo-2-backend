import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity({name: 'Carrito'})
export class Carrito {

    @PrimaryColumn()
    public id: number;

    @Column({name: 'id_pedido'})
    public id_pedido: number; 

    @Column()
    public total_a_pagar: number;

    @Column({name: 'id_documento'})
    public documento: number; 

    @OneToOne(() => Pedido)
    @JoinColumn({name: 'id_pedido'})
    pedido : Pedido;
   
}