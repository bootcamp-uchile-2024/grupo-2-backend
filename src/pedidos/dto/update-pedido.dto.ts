import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    @ApiProperty({description:'lista de cervezas a comprar'})
    public items: Cerveza[]
    @ApiProperty({default:'Dirección de entrega del pedido'})
    public direccion_entrega: string //puede ser local o envio a tercero
    @ApiProperty({default:'Correo del comprador'})
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @ApiProperty({default:'Número de teléfono del comprador'})
    public telefono_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
}
