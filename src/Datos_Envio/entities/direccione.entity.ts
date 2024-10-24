import { ApiProperty } from "@nestjs/swagger";
import { Comuna } from "src/enum/comunas";
import { Region } from "src/enum/regiones";

export class Direccione {
    @ApiProperty()
    public id: number;
    @ApiProperty({ default: 'Calle dirección' })
    public calle: string;
    @ApiProperty({ default: 'Número dirección' })
    public numero: number;
    @ApiProperty({ default: 'Numero de departamento dirección' })
    public departamento?: string;
    @ApiProperty({ default: 'Ciudad dirección' })
    public comuna: Comuna;
    @ApiProperty({ default: 'Código postal dirección' })
    public codigoPostal?: string;
    @ApiProperty({ default: '11111111-1'})
    public rut_usuario: string;
    @ApiProperty({ default: '925362514' })
    public telefono: string;
    @ApiProperty({ default: 'abc@asd.cl' })
    public correo_electronico: string;
}


