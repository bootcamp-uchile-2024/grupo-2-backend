import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    @IsNotEmpty()
    @ApiProperty({description:'lista de cervezas a comprar'})
    public items: Cerveza[]
    @ApiProperty({default:'Dirección de entrega del pedido'})
    @IsNotEmpty()
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
