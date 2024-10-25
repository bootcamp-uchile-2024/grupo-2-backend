import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFormularioDto } from './create-formulario.dto';
import { ActividadViernes, DescripcionAmigos, TipoComida, DestinoVacaciones, SaborBebida } from 'src/enum/preferencias-formulario';
import { IsNotEmpty, IsEnum } from 'class-validator';

export class UpdateFormularioDto extends PartialType(CreateFormularioDto) {
    
    @IsNotEmpty({message:"El campo actividad de Viernes es requerido para evaluar el formulario"})
    @IsEnum(ActividadViernes)
    @ApiProperty({ default: 'Salir de carrete con amigos', description: 'ActividadViernes', enum: ActividadViernes })
    public actividadViernes: ActividadViernes;


    @IsNotEmpty({message:"el campo descripcion de amigos es requerido para evaluar el formulario"})
    @IsEnum(DescripcionAmigos)
    @ApiProperty({ default: 'Extrovertido/a y siempre dispuesto/a a probar cosas nuevas.', description: 'DescripcionAmigos', enum: DescripcionAmigos })
    public descripcionAmigos: DescripcionAmigos;

    @IsNotEmpty({message:"el campo tipo de comida es requerido para evaluar el formulario"})
    @IsEnum(TipoComida)
    @ApiProperty({ default: 'Picante y llena de sabor.', description: 'TipoComida', enum: TipoComida })
    public tipoComida: TipoComida;

    @IsNotEmpty({message:"el campo destino de vacaciones es requerido para evaluar el formulario"})
    @IsEnum(DestinoVacaciones)
    @ApiProperty({ default: 'Una gran ciudad llena de vida nocturna', description: 'DestinoVacaciones', enum: DestinoVacaciones })
    public destinoVacaciones: DestinoVacaciones;

    @IsNotEmpty({message:"el campo sabor de bebida es requerido para evaluar el formulario"})
    @IsEnum(SaborBebida)
    @ApiProperty({ default: 'Fuerte y con carácter', description: 'SaborBebida', enum: SaborBebida })
    public saborBebida: SaborBebida;
}
