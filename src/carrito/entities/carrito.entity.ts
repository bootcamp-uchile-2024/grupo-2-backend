import { ApiProperty } from "@nestjs/swagger";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";

export class Carrito {
    @ApiProperty()
    public id: number; //autogenerado
    @ApiProperty({default: "items en el carrito"})
    public items: Cerveza[]; 
    @ApiProperty({default:"Precio total"}) //generado a partir de los item agregados
    public total_a_pagar: number;
    @ApiProperty({default:"documento para la compra"}) 
    public documento: number; //siempre boleta
   
}