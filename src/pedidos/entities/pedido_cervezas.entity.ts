import { ApiProperty } from "@nestjs/swagger";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";
import { estadoPedidos } from "src/enum/estado-pedidos";
import { Column, Entity, JoinColumn, NumericType, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'Pedido_Cerveza'})
export class Pedido_Cerveza {
    @ApiProperty()
    @PrimaryColumn()
    public id_pedido: number; 
   
    @ApiProperty()
    @PrimaryColumn()
    public id_cerveza: number;
   
    @ApiProperty()
    @Column()
    public cantidad: number;
}

