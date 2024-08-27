import { ApiProperty } from "@nestjs/swagger";
import { Region } from "src/enum/regiones";

export class CreateUsuarioDto {
    @ApiProperty({default:'Nombre usuario'})
    public nombre: string;
    @ApiProperty({default:'Correo usuario'})
    public correo: string;
    @ApiProperty({default:'Contraseña usuario'})
    public contraseña: string;
    @ApiProperty({default:'Dirección usuario'})
    public direccion: string;
    @ApiProperty({default:'Número de teléfono usuario'})
    public telefono: string; //lo convertimos a number internamente
    @ApiProperty({default:'Región en la que reside el usuario'})
    public region: Region; // Enum para que sea selector
    @ApiProperty({default:'Edad usuario'})
    public edad: number;
}
