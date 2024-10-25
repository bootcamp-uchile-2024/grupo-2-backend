import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsNotEmpty, IsDate, IsEmail, IsString, IsPhoneNumber, Matches, ValidateNested } from 'class-validator';
import { estadoPedidos } from 'src/enum/estado-pedidos';
import { Type } from 'class-transformer';
import { TipoCerveza } from 'src/enum/tipos-cerveza';
import { CreateDireccioneDto } from 'src/Datos_Envio/dto/create-direccione.dto';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {

    @IsNotEmpty({ message: 'La lista de cervezas a comprar es requerida' })
    @ApiProperty({ default: 'Pale Ale' ,description: 'Tipos de Cerveza' , enum: TipoCerveza})
    public items: Cerveza[];

    @IsNotEmpty({ message: 'El estado del pedido es requerido' })
    @ApiProperty({ default: 'creado',description:'estado del pedido', enum: estadoPedidos })
    public estado: estadoPedidos // creado, aceptado, pagado, enviado, entregado, etc. Enum

    @IsNotEmpty({ message: 'La fecha de ingreso del pedido es requerida' })
    @Type(() => Date)
    @IsDate({ message: 'La fecha de ingreso del pedido debe ser una fecha' })
    @ApiProperty({ default:'2024-07-21',description: 'Fecha ingreso del pedido' })
    public fecha_ingreso: Date //Autogenerado

    @IsNotEmpty({ message: 'La dirección de entrega del pedido es requerida' })
    @ValidateNested({ each: true })
    @Type(() => CreateDireccioneDto)
    @ApiProperty({ default: CreateDireccioneDto, type: [CreateDireccioneDto] })
    public direccion_entrega: Direccione //puede ser local o envio a tercerohecho // ====== se deberia modificar direccion ya que viene de una clase =====

    @IsNotEmpty({ message: 'El correo del comprador es requerido' })
    @IsEmail({}, { message: 'El correo del comprador debe ser un correo válido' })
    @ApiProperty({ default: '656@345.cl', description:'correo del usuario' }) // 
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.

    @IsString({ message: 'El número telefónico del comprador debe ser un texto' })
    @IsPhoneNumber('CL', { message: 'El Movil del comprador debe ser un número de Chile' })
    @Matches(/^\d{9}$/, { message: 'El Movil del comprador debe ser un número de 9 dígitos' })
    @ApiProperty({ default: '980765432' })
    public telefono_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.

    @IsNotEmpty({ message: 'La fecha de entrega del pedido es requerida' })
    @Type(() => Date)
    @IsDate({ message: 'La fecha de entrega del pedido debe ser una fecha' })
    @ApiProperty({ default: '2024-03-03', description: 'Fecha de entrega del pedido' })
    public fecha_entrega: Date //entrega física o envío

}
