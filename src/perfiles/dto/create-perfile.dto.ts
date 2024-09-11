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


    @IsNotEmpty()
    @IsString()
    @IsEnum(PersonajeCerveza)
    @ApiProperty({ default: 'El Buena Onda (Pale Ale)', description: 'Personaje asociado al perfil basado en las preferencias', enum: PersonajeCerveza })
    public nombre: PersonajeCerveza;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePedidoDto)
    @ApiProperty({ default: CreatePedidoDto, description: 'Lista de pedidos asociados al perfil', type: [CreatePedidoDto], })
    public historialPedidos?: Pedido[];

    @IsOptional()
    @IsString()
    @ApiProperty({ default: 'Plata Premium', description: 'Lista de suscripciones asociadas al perfil', enum: TipoSuscripcion, })
    public suscripciones?: TipoSuscripcion;

    @IsOptional()
    @IsEnum(TipoCerveza, { each: true })
    @ApiProperty({ default: 'Pale Ale', description: 'Lista de recomendaciones personalizadas para el perfil', enum: TipoCerveza, type: [String], })
    public recomendaciones?: TipoCerveza[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateFormularioDto)
    @ApiProperty({ default: CreateFormularioDto, description: 'Respuesta del Formulario', type:[CreateFormularioDto] })
    public formularioPreferencias?: Formulario;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ default: 'Usuario intermedio', description: 'Nivel del usuario (ej: principiante, intermedio, experto)', })
    public nivelUsuario: string;
}
