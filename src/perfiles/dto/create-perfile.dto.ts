import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PersonajeCerveza } from "src/enum/personajes";
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { TipoCerveza } from "src/enum/tipos-cerveza";
import { Formulario } from "src/formularios/entities/formulario.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";


export class CreatePerfileDto {

    @IsNotEmpty()
    @IsString()
    @IsEnum(PersonajeCerveza)
    @ApiProperty({ default: 'El Buena Onda (Pale Ale)', description: 'Personaje asociado al perfil basado en las preferencias', enum: PersonajeCerveza })
    public nombre: PersonajeCerveza;

    @IsOptional()
    @IsArray()
    @ApiProperty({ default: [], description: 'Lista de pedidos asociados al perfil', type: [Pedido], })
    public historialPedidos?: Pedido[];

    @IsOptional()
    @IsString()
    @ApiProperty({ default: 'Plata Premium', description: 'Lista de suscripciones asociadas al perfil', enum: TipoSuscripcion, })
    public suscripciones?: TipoSuscripcion;

    @IsOptional()
    @IsArray()
    @IsEnum(TipoCerveza, { each: true })
    @ApiProperty({ default: [], description: 'Lista de recomendaciones personalizadas para el perfil', enum: TipoCerveza, type: [String], })
    public recomendaciones?: TipoCerveza[];

    @ApiProperty({ default: [], description: 'Respuesta del Formulario' })
    public formularioPreferencias: Formulario;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ default: 'Usuario intermedio', description: 'Nivel del usuario (ej: principiante, intermedio, experto)', })
    public nivelUsuario: string;
}
