import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";


export class CreatePedidoDto {
    @IsNotEmpty()
    @ApiProperty({description:'lista de cervezas a comprar'})
    public items: Cerveza[]
    @IsNotEmpty()
    @ApiProperty({default:'Dirección de entrega del pedido'})
    public direccion_entrega: string //puede ser local o envio a tercero
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({default:'Correo del comprador'})
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({default:'Número de teléfono del comprador'})
    public telefono_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({default:'Número de rut del comprador'})
    public rut_comprador: number
}
