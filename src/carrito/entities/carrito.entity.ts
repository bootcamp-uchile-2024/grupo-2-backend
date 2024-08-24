import { ApiProperty } from "@nestjs/swagger";

export class Carrito {
    @ApiProperty()
    public id: number;
    @ApiProperty({default: "items en el carrito"})
    public items: string;
    @ApiProperty({default:"Precio total"}) //generado a partir de los item agregados
    public total_a_pagar: number;
    @ApiProperty({default:"documento para la compra"}) 
    public documento: number;
   
}