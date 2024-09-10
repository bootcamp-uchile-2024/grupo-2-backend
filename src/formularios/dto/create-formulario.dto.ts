import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { ActividadViernes, DescripcionAmigos, TipoComida, DestinoVacaciones, SaborBebida } from "src/enum/preferencias-formulario";

export class CreateFormularioDto {
    
    @IsNotEmpty()
    @IsEnum(ActividadViernes)
    @ApiProperty({ default: 'Salir de carrete con amigos', description: 'ActividadViernes', enum: ActividadViernes })
    public actividadViernes: ActividadViernes;


    @IsNotEmpty()
    @IsEnum(DescripcionAmigos)
    @ApiProperty({ default: 'Extrovertido/a y siempre dispuesto/a a probar cosas nuevas.', description: 'DescripcionAmigos', enum: DescripcionAmigos })
    public descripcionAmigos: DescripcionAmigos;

    @IsNotEmpty()
    @IsEnum(TipoComida)
    @ApiProperty({ default: 'Picante y llena de sabor.', description: 'TipoComida', enum: TipoComida })
    public tipoComida: TipoComida;

    @IsNotEmpty()
    @IsEnum(DestinoVacaciones)
    @ApiProperty({ default: 'Una gran ciudad llena de vida nocturna', description: 'DestinoVacaciones', enum: DestinoVacaciones })
    public destinoVacaciones: DestinoVacaciones;

    @IsNotEmpty()
    @IsEnum(SaborBebida)
    @ApiProperty({ default: 'Fuerte y con carácter', description: 'SaborBebida', enum: SaborBebida })
    public saborBebida: SaborBebida;
}
