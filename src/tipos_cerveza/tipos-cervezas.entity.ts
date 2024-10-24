import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Tipo_Cerveza"})
export class TipoCerveza{

  @ApiProperty({description: 'ID único del tipo de cerveza' })
  @PrimaryColumn()
  public id: number;

  @ApiProperty({description: 'nombre del tipo de cerveza'})
  @Column()
  public nombre: string;

  @ApiProperty({description: 'descripcion del tipo de cerveza'})
  @Column()
  public descripcion: string;
  
  @ApiProperty({description: 'categoria del tipo de cerveza'})
  @Column()
  public categoria: string;
  
  @ApiProperty({description: 'color de la cerveza'})
  @Column()
  public color: string;
}