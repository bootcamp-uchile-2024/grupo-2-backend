import { ApiProperty } from "@nestjs/swagger";
import { Pedido } from "src/pedidos/entities/pedido.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity({name: 'Carrito'})
export class Carrito {
    @ApiProperty()
    @PrimaryColumn()
    public id: number; //autogenerado
    @ApiProperty({default: "items en el carrito"})
    @Column({name: 'id_pedido'})
    public id_pedido: number; 
    @ApiProperty({default:"Precio total"}) //generado a partir de los item agregados
    @Column()
    public total_a_pagar: number;
    @ApiProperty({default:"documento para la compra"}) 
    @Column({name: 'id_documento'})
    public documento: number; //siempre boleta

    @OneToOne(() => Pedido)
    @JoinColumn({name: 'id_pedido'})
    pedido : Pedido;
   
}