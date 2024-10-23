import { ApiProperty } from "@nestjs/swagger";
import { Formato } from "src/enum/formato";
import { IBU } from "src/enum/amargor";
import { TipoCerveza } from "src/enum/tipos-cerveza";
import { Column, Entity, ManyToOne, NumericType, PrimaryColumn } from "typeorm";

@Entity({name: "Cerveza"})
export class Cerveza {

  @ApiProperty({ default: 1, description: 'ID único de la cerveza' })
  @PrimaryColumn()
  public id: number; //autogenerado
  @ApiProperty({ default: 'Torobayo', description: 'Nombre de la cerveza' })
  @Column()
  public nombre: string;
  @ApiProperty({ default: 'Kuntsmann', description: 'Marca de la cerveza' })
  @Column()
  public marca: string;
  @ApiProperty({ default: 'Pale Ale', description: 'Categoría de la cerveza', enum: TipoCerveza })
  @Column()
  public tipo: TipoCerveza;
  @ApiProperty({ default: 100, description: 'Stock de la cerveza' })
  @Column()
  public stock: number;
  @ApiProperty({ default: 'Tiene un perfil de sabor equilibrado con notas de lúpulo fresco y un toque de caramelo, color es dorado brillante y amargor moderado que complementa su sabor maltoso', description: 'Descripción de la cerveza' })
  @Column()
  public descripcion: string;
  @ApiProperty({ default: 1000, description: 'Precio de la cerveza' })
  @Column()
  public precio: number;
  @ApiProperty({ default: 'CCU', description: 'Nombre Proveedor de la cerveza' })
  @Column({name: 'id_proveedor'})
  public proveedor: number;
  @ApiProperty({ default: 'Moderado', description: 'Amargor de la cerveza', enum: IBU })
  @Column({name: 'id_amargor'})
  public amargor: IBU;
  @ApiProperty({ default: '5%', description: 'Graduación de la cerveza' })
  @Column()
  public graduacion: string;
  @ApiProperty({ default: 'Botella', description: 'Formato de la cerveza', enum: Formato })
  @Column({name: 'id_formato'})
  public formato: Formato;
  @ApiProperty({ default: 'https://placehold.co/400x600', description: 'Imagen de la cerveza' })
  @Column()
  public imagen: string;
}

