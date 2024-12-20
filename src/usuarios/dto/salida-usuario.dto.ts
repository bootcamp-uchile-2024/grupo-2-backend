import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString, Min } from "class-validator";
import { Rol } from "src/enum/rol.enum";


export class SalidaUsuarioDto {
    @IsString()
    @ApiProperty({ example: '12345678-9'}) 
    public rut: string;

    @IsString({ message: 'El nombre del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El nombre del comprador no puede estar vacío' })
    @ApiProperty({ example: 'Juan', description: 'Nombre del usuario' }) 
    public nombre: string;

    @IsString({ message: 'El apellido del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El apellido del comprador no puede estar vacío' })
    @ApiProperty({ example: 'Perez', description: 'Apellido del usuario' }) 
    public apellido: string;

    @Min(18) 
    @ApiProperty({ example: 25, description: 'Edad', minimum: 18 })
    public edad: number;

    @IsString()
    public tipo_suscripcion: string;

    @IsString()
    @ApiProperty({example:'aaaaa@aaaa.cl'})
    public correo_comprador?: string;

    @IsString()
    @ApiProperty({example:'65211449'})
    public telefono_comprador?: string;

    @IsString()
    @ApiProperty({enum: Rol, default:'user'})
    public rol: string;

    @IsBoolean()
    @ApiProperty({description: 'indica si el usuario está activo o no'})
    public is_active: boolean;
}
