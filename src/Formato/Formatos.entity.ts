import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Formato"})
export class Formato{
  @PrimaryColumn()
  public id: string;
  @Column()
  public descripcion: string;
}