import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Min } from "class-validator";
import { Rol } from "src/enum/rol.enum";

//este DTO permite devolver lo usuarios manteniendo la contraseña oculta.
export class SalidaUsuarioDto {
    @IsString()
    @ApiProperty({ example: '12345678-9'}) // === Actualizado ===
    public rut: string;

    @IsString({ message: 'El nombre del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El nombre del comprador no puede estar vacío' })
    @ApiProperty({ example: 'Juan', description: 'Nombre del usuario' }) // === Actualizado ===
    public nombre: string;

    @IsString({ message: 'El apellido del comprador debe ser un string' })
    @IsNotEmpty({ message: 'El apellido del comprador no puede estar vacío' })
    @ApiProperty({ example: 'Perez', description: 'Apellido del usuario' }) // === Modificado por mi
    public apellido: string;

    @Min(18) //validacion para edad, debe ser mayor o igual a 18.
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
    
}
