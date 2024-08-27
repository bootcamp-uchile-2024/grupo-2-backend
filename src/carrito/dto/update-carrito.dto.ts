import { PartialType } from '@nestjs/mapped-types';
import { CreateCarritoDto } from './create-carrito.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';


export class UpdateCarritoDto extends PartialType(CreateCarritoDto) {
    @ApiProperty({default: "items en el carrito"})
    public items: Cerveza[];
}
