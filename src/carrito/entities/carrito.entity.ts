import { Pedido_Cerveza } from "src/pedidos/entities/pedido_cervezas.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Carrito'})
export class Carrito {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public rut_comprador: string;

    @OneToMany(() => Pedido_Cerveza, (p) => p.carrito)
    pedido_cervezas : Pedido_Cerveza[];
   
}