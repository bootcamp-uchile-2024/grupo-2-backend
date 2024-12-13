import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePedidoCervezaDto {
    @IsNotEmpty({ message: 'El id de cerveza es requerido' })
    @ApiProperty({default:1 ,description: 'id de la cerveza' }) // Modificacion hecha por mi
    public id_cerveza: number;
    @IsNotEmpty({ message: 'la cantidad de cervezas del pedido es requerido' })
    @ApiProperty({ default: 1, description: 'cantidad de cervezas del mismo tipo' }) // Modificacion hecha por mi
    public cantidad: number;
    @IsNotEmpty()
    @ApiProperty({ default: 3000, description: 'precio al que se está comprando la cerveza' }) // Modificacion hecha por mi
    public precio: number;
}

