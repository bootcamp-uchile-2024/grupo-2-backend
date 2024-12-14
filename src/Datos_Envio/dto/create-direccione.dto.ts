import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Validate } from "class-validator";
import { RutValidator } from "src/usuarios/pipe/rutValidation.pipe";

export class CreateDireccioneDto {

    @IsNotEmpty({ message: 'El rut del usuario es requerido' })
    @IsString()
    @Validate(RutValidator)
    @ApiProperty({ default: '12345678-9', description: 'sin puntos, sólo con guion' })
    public rut_usuario: string;

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
    @ApiProperty({ default: 'PuenteAlto', description: 'Comuna de la dirección'})
    public id_comuna: string;

    @IsOptional()
    @IsString({ message: 'El código postal de la dirección debe ser un texto de 7 dígitos' })
    @Matches(/^\d{7}$/, { message: 'El código postal de la dirección debe ser un texto de 7 dígitos' })
    @ApiProperty({ default: '2980909', description: 'Código postal de la dirección' })
    public codigo_Postal: string;

}

