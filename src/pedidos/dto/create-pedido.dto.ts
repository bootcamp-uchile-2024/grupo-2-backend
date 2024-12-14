import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, ValidateNested, IsEnum, Validate } from "class-validator";
import { estadoPedidos } from "src/enum/estado-pedidos";
import { CreatePedidoCervezaDto } from "src/pedidos/dto/create-pedido-cervezas.dto";
import { ApiHideProperty } from "@nestjs/swagger";
import { RutValidator } from "src/usuarios/pipe/rutValidation.pipe";

export class CreatePedidoDto {
    @IsNotEmpty({ message: 'El RUT del comprador es requerido' })
    @ApiProperty({ example: '12345678-9', description: 'RUT del comprador' })
    public rut_comprador: string;

    @IsNotEmpty({ message: 'El ID de la dirección es requerido' })
    @ApiProperty({ example: 1, description: 'ID de la dirección de entrega seleccionada' })
    public id_direccion: number;

    @IsNotEmpty({ message: 'El ID del carrito que se desea pagar es requerido' })
    @ApiProperty({ example: 1, description: 'El ID del carrito que se desea pagar' })
    public id_carrito: number;

    @IsEnum(estadoPedidos, { message: 'Estado debe ser uno de los valores permitidos' })
    @ApiProperty({ example: 'Creado', description: 'Estado del pedido', enum: estadoPedidos })
    public estado: estadoPedidos;

    @Type(() => Date)
    @IsDate({ message: 'La fecha de ingreso debe ser válida' })
    @ApiHideProperty()
    public fecha_ingreso: Date = new Date();

    @Type(() => Date)
    @IsDate({ message: 'La fecha de entrega debe ser válida' })
    @ApiProperty({ example: '2024-12-23', description: 'Fecha de entrega del pedido' })
    public fecha_entrega: Date;
    
}
