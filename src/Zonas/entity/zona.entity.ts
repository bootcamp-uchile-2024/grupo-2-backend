import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Zona"})
export class Zona{
  @PrimaryColumn()
  public id: number;

  @Column()
  public nombre: string;
}