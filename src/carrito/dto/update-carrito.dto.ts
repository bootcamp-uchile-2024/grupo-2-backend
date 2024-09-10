import { PartialType } from '@nestjs/mapped-types';
import { CreateCarritoDto } from './create-carrito.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Cerveza } from 'src/cervezas/entities/cerveza.entity';
import { UpdateCervezaDto } from 'src/cervezas/dto/update-cerveza.dto';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';


export class UpdateCarritoDto extends PartialType(CreateCarritoDto) {
    @ValidateNested({ each: true })
    @Type(() => UpdateCervezaDto)
    @ApiProperty({default: Cerveza, type: [UpdateCervezaDto]})
    public items: Cerveza[];
}
