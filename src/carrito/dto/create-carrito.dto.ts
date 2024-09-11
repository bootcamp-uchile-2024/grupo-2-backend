import { ApiProperty } from "@nestjs/swagger";

import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { CreateCervezaDto } from "src/cervezas/dto/create-cerveza.dto";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";

export class CreateCarritoDto {
    @ValidateNested({ each: true })
    @Type(() => CreateCervezaDto)
    @ApiProperty({default: Cerveza, type: [CreateCervezaDto]})
    public items: Cerveza[];
}