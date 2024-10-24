import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { PersonajeCerveza } from "src/enum/personajes";
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { TipoCerveza } from "src/enum/tipos-cerveza";
import { CreateFormularioDto } from "src/formularios/dto/create-formulario.dto";
import { Formulario } from "src/formularios/entities/formulario.entity";
import { CreatePedidoDto } from "src/pedidos/dto/create-pedido.dto";
import { Pedido } from "src/pedidos/entities/pedido.entity";


export class CreatePerfileDto {


    @IsNotEmpty({message: "El nombre del personaje es requerido para crear un perfil"})
    @IsString({message: "el nombre del personaje debe ser un string"})
    @IsEnum(PersonajeCerveza)
    @ApiProperty({ default: 'El Buena Onda (Pale Ale)', description: 'Personaje asociado al perfil basado en las preferencias', enum: PersonajeCerveza })
    public nombre: PersonajeCerveza;

    @IsOptional({message: "el histortial es opcional"})
    @IsArray({message: "el historial debe ser un array de pedidos"})
    @ValidateNested({ each: true })
    @Type(() => CreatePedidoDto)
    @ApiProperty({ default: CreatePedidoDto, description: 'Lista de pedidos asociados al perfil', type: [CreatePedidoDto], })
    public historialPedidos?: Pedido[];

    @IsOptional({message: "las suscripciones son opcionales"})
    @IsString({message: "las suscripciones deben ser un string"})
    @ApiProperty({ default: 'Plata Premium', description: 'Lista de suscripciones asociadas al perfil', enum: TipoSuscripcion, })
    public suscripciones?: TipoSuscripcion;

    @IsOptional({message: "las recomendaciones son opcionales"})
    @IsEnum(TipoCerveza, { each: true })
    @ApiProperty({ default: 'Pale Ale', description: 'Lista de recomendaciones personalizadas para el perfil', enum: TipoCerveza, type: [String], })
    public recomendaciones?: TipoCerveza[];

    @IsOptional({message: "el formulario de preferencias es opcional"})
    @ValidateNested({ each: true })
    @Type(() => CreateFormularioDto)
    @ApiProperty({ default: CreateFormularioDto, description: 'Respuesta del Formulario', type:[CreateFormularioDto] })
    public formularioPreferencias?: Formulario;

    @IsNotEmpty({message: "el nivel de usuario es requerido"})
    @IsString({message: "el nivel de usuario debe ser un string"})
    @ApiProperty({ default: 'Usuario intermedio', description: 'Nivel del usuario (ej: principiante, intermedio, experto)', })
    public nivelUsuario: string;
}
