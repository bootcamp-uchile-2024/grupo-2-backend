import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";

export class CreateCarritoDto {
    @IsNotEmpty()
    @ApiProperty({default: "items en el carrito"})
    public items: Cerveza[];
}