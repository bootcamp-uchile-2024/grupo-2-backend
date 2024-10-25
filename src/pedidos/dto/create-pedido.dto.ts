import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches, ValidateNested } from "class-validator";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";
import { CreateDireccioneDto } from "src/Datos_Envio/dto/create-direccione.dto";
import { Direccione } from "src/Datos_Envio/entities/direccione.entity";
import { estadoPedidos } from "src/enum/estado-pedidos";
import { TipoCerveza } from "src/enum/tipos-cerveza";


export class CreatePedidoDto {


    @IsNotEmpty({ message: 'El id del usuario es requerido' })
    @ApiProperty({ default: 1,description: 'id del usuario dueño del pedido' }) // Modificacion hecha por mi
    public idUsuario: number; //relacionado con el usuario que lo crea

    @IsNotEmpty({ message: 'La lista de cervezas a comprar es requerida' })
    @ApiProperty({ default: 'Pale Ale', description: 'Lista de cervezas a comprar', enum: TipoCerveza })
    public items: Cerveza[];

    @IsNotEmpty({ message: 'El estado del pedido es requerido' })
    @ApiProperty({ default: 'creado', description: 'Estado del pedido', enum: estadoPedidos })
    public estado: estadoPedidos // creado, aceptado, pagado, enviado, entregado, etc. Enum

    @IsNotEmpty({ message: 'La fecha de ingreso del pedido es requerida' })
    @Type(() => Date)
    @IsDate({ message: 'La fecha de ingreso del pedido debe ser una fecha' })
    @ApiProperty({ default: '2024-09-01', description: 'Fecha ingreso del pedido' })
    public fecha_ingreso: Date //Autogenerado

    @IsNotEmpty({ message: 'La dirección de entrega del pedido es requerida' })
    @ValidateNested({ each: true })
    @Type(() => CreateDireccioneDto)
    @ApiProperty({ default: CreateDireccioneDto, description: 'direccion de entrega' ,type: [CreateDireccioneDto] })
    public direccion_entrega: Direccione //puede ser local o envio a tercerohecho // ====== se deberia modificar direccion ya que viene de una clase =====

    @IsNotEmpty({ message: 'El correo del comprador es requerido' })
    @IsEmail({}, { message: 'El correo del comprador debe ser un correo válido' })
    @ApiProperty({ default:'123@123.cl' ,description: 'Correo del comprador' }) // 
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.

    @IsString({ message: 'El número telefónico del comprador debe ser un texto' })
    @IsPhoneNumber('CL', { message: 'El Movil del comprador debe ser un número de Chile' })
    @Matches(/^\d{9}$/, { message: 'El Movil del comprador debe ser un número de 9 dígitos' })
    @ApiProperty({ default: '945635383' })
    public telefono_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    
    @IsNotEmpty({ message: 'La fecha de entrega del pedido es requerida' })
    @Type(() => Date)
    @IsDate({ message: 'La fecha de entrega del pedido debe ser una fecha' })
    @ApiProperty({ default: '2024-12-23' })
    public fecha_entrega: Date //entrega física o envío
}
