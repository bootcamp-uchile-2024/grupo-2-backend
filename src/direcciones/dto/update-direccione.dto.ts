import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDireccioneDto } from './create-direccione.dto';
import { Comuna } from 'src/enum/comunas';
import { Region } from 'src/enum/regiones';
import { IsEnum, IsNotEmpty } from 'class-validator';


export class UpdateDireccioneDto extends PartialType(CreateDireccioneDto) {
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
