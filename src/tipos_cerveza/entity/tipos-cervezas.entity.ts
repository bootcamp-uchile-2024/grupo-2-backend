import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Tipo_Cerveza"})
export class TipoCerveza{

  @PrimaryColumn()
  public id: number;

  @Column()
  public nombre: string;

  @Column()
  public descripcion: string;

  @Column()
  public categoria_id: number;

  @Column()
  public color_id: number;
}