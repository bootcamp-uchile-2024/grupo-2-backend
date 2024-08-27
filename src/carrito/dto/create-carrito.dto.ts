import { ApiProperty } from "@nestjs/swagger";
import { Cerveza } from "src/cervezas/entities/cerveza.entity";

export class CreateCarritoDto {
    @ApiProperty({default: "items en el carrito"})
    public items: Cerveza[];
}