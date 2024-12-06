import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Color"})
export class Color{
  @PrimaryColumn()
  public id: number;

  @Column()
  public nombre: string;
}