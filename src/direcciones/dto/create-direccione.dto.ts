import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { Comuna } from "src/enum/comunas";
import { Region } from "src/enum/regiones";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreateDireccioneDto {
    @ApiProperty({ default: 'ID del usuario al que pertenece la dirección' })
    public idUsuario: Usuario;
    @IsNotEmpty()
    @ApiProperty({ default: 'Calle dirección' })
    public calle: string;
    @IsNotEmpty()
    @ApiProperty({ default: 'Número dirección' })
    public numero: number;
    @ApiProperty({ default: 'Numero de departamento dirección' })
    public departamento?: string;
    @IsNotEmpty()
    @IsEnum(Region)
    @ApiProperty({ default: Region.AR, description: 'Región dirección', enum: Region })
    public region: Region;
    @IsNotEmpty()
    @IsEnum(Comuna)
    @ApiProperty({ default: Comuna.TEMUCO, description: 'Ciudad dirección', enum: Comuna })
    public comuna: Comuna;
    @ApiProperty({ default: 'Código postal dirección' })
    public codigoPostal?: string;
}

