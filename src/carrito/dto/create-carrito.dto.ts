import { ApiProperty } from "@nestjs/swagger";

export class CreateCarritoDto {
    @ApiProperty({default: "items en el carrito"})
    public items: string;
    @ApiProperty({default:"documento para la compra"})
    public documento: number;
}