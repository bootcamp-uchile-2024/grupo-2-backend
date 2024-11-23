import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
import { estadoPedidos } from "src/enum/estado-pedidos";
import { CreatePedidoCervezaDto } from "src/pedidos/dto/create-pedido-cervezas.dto";

export class CreatePedidoDto {
    @IsNotEmpty({ message: 'El RUT del comprador es requerido' })
    @ApiProperty({ example: '11.111.111-1', description: 'RUT del comprador' })
    public rut_comprador: string;

    @IsNotEmpty({ message: 'El ID de la dirección es requerido' })
    @ApiProperty({ example: 1, description: 'ID de la dirección de entrega seleccionada' })
    public id_direccion: number;

    @ValidateNested({ each: true })
    @Type(() => CreatePedidoCervezaDto)
    @IsNotEmpty({ message: 'Debe incluir al menos una cerveza en el pedido' })
    @ApiProperty({ type: [CreatePedidoCervezaDto], description: 'Lista de cervezas y cantidades asociadas al pedido' })
    public cervezas: CreatePedidoCervezaDto[];

    @ApiProperty({ example: 'creado', description: 'Estado del pedido', enum: estadoPedidos })
    public estado: estadoPedidos

    @Type(() => Date)
    @IsDate({ message: 'La fecha de entrega debe ser válida' })
    @ApiProperty({ example: '2024-12-23', description: 'Fecha de entrega del pedido' })
    public fecha_entrega: Date;

    @IsOptional()
    @IsEmail({}, { message: 'El correo debe ser válido' })
    @ApiProperty({ example: 'correo@ejemplo.com', required: false })
    public correo_comprador?: string;

    @IsOptional()
    @ApiProperty({ example: '987654321', required: false, description: 'Teléfono del comprador' })
    public telefono_comprador?: string;
}
