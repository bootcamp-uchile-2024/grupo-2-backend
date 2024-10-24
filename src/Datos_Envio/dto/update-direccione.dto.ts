import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDireccioneDto } from './create-direccione.dto';
import { Comuna } from 'src/enum/comunas';
import { Region } from 'src/enum/regiones';
import { IsNotEmpty, IsString, IsNumber, IsEnum, IsOptional, Matches, Length } from 'class-validator';
import { Usuario } from 'src/usuarios/entities/usuario.entity';



export class UpdateDireccioneDto extends PartialType(CreateDireccioneDto) {
    @IsNotEmpty({ message: 'El nombre de la calle es requerido' })
    @IsString({ message: 'El nombre de la calle debe ser un texto' })
    @ApiProperty({ default: 'Los Encinos', description: 'Nombre de la calle de la dirección' })
    public calle: string;

    @IsNotEmpty({ message: 'El número de la dirección es requerido' })
    @IsNumber({}, { message: 'El número de la dirección debe ser un número' })
    @ApiProperty({ default: 307, description: 'Número de la dirección' })
    public numero: number;

    @IsString({ message: 'El número de departamento debe ser un texto' })
    @ApiProperty({ default: '503 B', description: 'Número de departamento del la direccion' })
    public departamento?: string;

    @IsNotEmpty({ message: 'La comuna de la dirección es requerida' })
    @IsString({ message: 'La comuna de la dirección debe ser un texto' })
    @IsEnum(Comuna, { message: 'La comuna de la dirección no es válida' })
    @ApiProperty({ default: 'Puente Alto', description: 'Comuna de la dirección', enum: Comuna })
    public id_comuna: Comuna;

    @IsOptional()
    @IsString({ message: 'El código postal de la dirección debe ser un texto de 7 dígitos' })
    @Matches(/^\d{7}$/, { message: 'El código postal de la dirección debe ser un texto de 7 dígitos' })
    @ApiProperty({ default: '2980909', description: 'Código postal de la dirección' })
    public codigo_Postal: string;

    @IsNotEmpty({ message: 'El rut del usuario es requerido' })
    @IsString()
    @Length(9, 10, { message: 'El rut del usuario debe tener entre 9 y 10 caracteres' })
    @Matches(/^\d{1,8}-[0-9Kk]{1}$/, { message: 'El RUT no tiene un formato válido.' })
    public rut_usuario: string;

    @IsNotEmpty({message: 'El correo telefono'})
    public telefono: string;

    @IsNotEmpty({message: 'El correo electrónico es requerido'})
    public correo_electronico: string;
}
