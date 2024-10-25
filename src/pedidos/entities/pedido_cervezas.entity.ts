import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'Pedido_Cerveza'})
export class Pedido_Cerveza {
   
    @PrimaryColumn()
    public id_pedido: number; 

    @PrimaryColumn()
    public id_cerveza: number;

    @Column()
    public cantidad: number;
}

