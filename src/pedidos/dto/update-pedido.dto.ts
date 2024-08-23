import { ApiProperty } from '@nestjs/swagger';

export class UpdatePedidoDto {
    //@ApiProperty()
    //public cervezas: Cerveza[]
    @ApiProperty()
    public direccion_entrega: string //puede ser local o envio a tercero
    @ApiProperty()
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
    @ApiProperty()
    public telefono_comprador: number //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.
}
