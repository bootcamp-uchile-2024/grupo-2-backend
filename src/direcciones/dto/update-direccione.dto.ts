import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDireccioneDto } from './create-direccione.dto';
import { Comuna } from 'src/enum/comunas';
import { Region } from 'src/enum/regiones';
import { IsNotEmpty, IsString, IsNumber, IsEnum, IsOptional, Matches } from 'class-validator';


export class UpdateDireccioneDto extends PartialType(CreateDireccioneDto) {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ default: 'Los Encinos', description: 'Nombre de la calle de la dirección' })
    public calle: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ default: 307, description: 'Número de la dirección' })
    public numero: number;

    @IsString()
    @ApiProperty({ default: '503 B', description: 'Número de departamento del la direccion' })
    public departamento?: string;

    @IsNotEmpty()
    @IsString()
    @IsEnum(Region)
    @ApiProperty({ default: 'Metropolitana', description: 'Región de la dirección', enum: Region })
    public region: Region;

    @IsNotEmpty()
    @IsString()
    @IsEnum(Comuna)
    @ApiProperty({ default: 'Puente Alto', description: 'Comuna de la dirección', enum: Comuna })
    public comuna: Comuna;

    @IsOptional()
    @IsString()
    @Matches(/^\d{7}$/)
    @ApiProperty({ default: 'Código postal dirección', description: 'Código postal de la dirección' })
    public codigoPostal?: string;
}
