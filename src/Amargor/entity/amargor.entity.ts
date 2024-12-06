import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Amargor"})
export class Amargor{
  @PrimaryColumn()
  public id: string;

  @Column()
  public nivel: string;

  @Column()
  public descripcion: string;
}