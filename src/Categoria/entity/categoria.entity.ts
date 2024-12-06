import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Categoria"})
export class Categoria{
  @PrimaryColumn()
  public id: number;

  @Column()
  public nombre: string;
}