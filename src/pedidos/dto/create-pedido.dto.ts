import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsMobilePhone, IsNotEmpty, IsPhoneNumber, IsString, Matches } from "class-validator";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";
import { Direccione } from "src/direcciones/entities/direccione.entity";
import { estadoPedidos } from "src/enum/estado-pedidos";


export class CreatePedidoDto {
    @IsNotEmpty({ message: 'El id del pedido es requerido' })
    public id: number;

    @IsNotEmpty({ message: 'El id del usuario es requerido' })
    @ApiProperty({ default: 'ID del usuario que crea el pedido' }) // Modificacion hecha por mi
    public idUsuario: number; //relacionado con el usuario que lo crea

    @IsNotEmpty({ message: 'La lista de cervezas a comprar es requerida' })
    @ApiProperty({ default: 'lista de cervezas del pedido' })
    public items: Cerveza[];

    @IsNotEmpty({ message: 'El estado del pedido es requerido' })
    @ApiProperty({ default: 'Estado del pedido' })
    public estado: estadoPedidos // creado, aceptado, pagado, enviado, entregado, etc. Enum

    @IsNotEmpty({ message: 'La fecha de ingreso del pedido es requerida' })
    @IsDate({ message: 'La fecha de ingreso del pedido debe ser una fecha' })
    @ApiProperty({ description: 'Fecha ingreso del pedido' })
    public fecha_ingreso: Date //Autogenerado

    @IsNotEmpty({ message: 'La dirección de entrega del pedido es requerida' })
    @ApiProperty({ default: 'Dirección de entrega del pedido', type: Direccione })
    public direccion_entrega: Direccione //puede ser local o envio a tercerohecho // ====== se deberia modificar direccion ya que viene de una clase =====

    @IsNotEmpty({ message: 'El correo del comprador es requerido' })
    @IsEmail({}, { message: 'El correo del comprador debe ser un correo válido' })
    @ApiProperty({ default: 'Correo del comprador' }) // 
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.

    @IsString({ message: 'El número telefónico del comprador debe ser un texto' })
    @IsPhoneNumber('CL', { message: 'El Movil del comprador debe ser un número de Chile' })
    @Matches(/^\d{9}$/, { message: 'El Movil del comprador debe ser un número de 9 dígitos' })
    @ApiProperty({ default: 'Número telefónico del comprador' })
    public telefono_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.

    @IsDate({ message: 'La fecha de entrega del pedido debe ser una fecha' })
    @ApiProperty({ default: 'Fecha de entrega del pedido' })
    public fecha_entrega: Date //entrega física o envío
}
