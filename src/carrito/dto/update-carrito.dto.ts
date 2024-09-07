import { PartialType } from '@nestjs/mapped-types';
import { CreateCarritoDto } from './create-carrito.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { IsNotEmpty } from 'class-validator';


export class UpdateCarritoDto extends PartialType(CreateCarritoDto) {
    @IsNotEmpty()
    @ApiProperty({default: "items en el carrito"})
    public items: Cerveza[];
}
