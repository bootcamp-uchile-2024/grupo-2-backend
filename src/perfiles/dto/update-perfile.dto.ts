import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerfileDto } from './create-perfile.dto';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Suscripcione } from 'src/suscripciones/entities/suscripcione.entity';
import { PersonajeCerveza } from 'src/enum/personajes';

export class UpdatePerfileDto extends PartialType(CreatePerfileDto) {    
  @ApiProperty({ default: 'Nombre del perfil', description: 'Nombre asociado al perfil' })
  public nombre: string;
 @ApiProperty({default: [],description: 'Lista de pedidos asociados al perfil',type: [Pedido],})
  public historialPedidos: Pedido[];
 @ApiProperty({default: [],description: 'Lista de suscripciones asociadas al perfil',type: [Suscripcione],})
  public suscripciones: Suscripcione[];
@ApiProperty({default: [],description: 'Lista de recomendaciones personalizadas para el perfil'})
  public recomendaciones:[];
@ApiProperty({description: 'Personaje asociado al perfil basado en las preferencias',enum: PersonajeCerveza})
  public personaje: PersonajeCerveza;
@ApiProperty({default: 'Cervezas artesanales',description: 'Tipo de cervezas preferidas por el usuario',type: [String],})
public formularioPreferencias: string[];
@ApiProperty({default: 'Usuario intermedio',description: 'Nivel del usuario (ej: principiante, intermedio, experto)',})
  public nivelUsuario: string;
}
