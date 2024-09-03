import { ApiProperty } from "@nestjs/swagger";
import { Comuna } from "src/enum/comunas";
import { Region } from "src/enum/regiones";

export class Direccione {
    @ApiProperty()
    public idUsuario: number;
    @ApiProperty({ default: 'Calle dirección' })
    public calle: string;
    @ApiProperty({ default: 'Número dirección' })
    public numero: number;
    @ApiProperty({ default: 'Numero de departamento dirección' })
    public departamento?: string;
    @ApiProperty({ default: 'Región dirección' })
    public region: Region;
    @ApiProperty({ default: 'Ciudad dirección' })
    public comuna: Comuna;
    @ApiProperty({ default: 'Código postal dirección' })
    public codigoPostal?: string;
}


