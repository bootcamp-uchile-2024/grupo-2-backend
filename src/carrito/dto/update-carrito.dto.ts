import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreatePedidoCervezaDto } from 'src/pedidos/dto/create-pedido-cervezas.dto';


export class UpdateCarritoDto {
    @ValidateNested({ each: true })
    @Type(() => CreatePedidoCervezaDto)
    @ApiProperty({default: CreatePedidoCervezaDto, type: [CreatePedidoCervezaDto]})
    public items: CreatePedidoCervezaDto[];

    @ApiProperty({description: 'total a pagar actualizado'})
    public total_a_pagar: number;
}
