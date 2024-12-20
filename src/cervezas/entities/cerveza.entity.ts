import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Proveedor } from "src/Proveedores/entities/proveedores.entity";
import { TipoCerveza } from "src/tipos_cerveza/entity/tipos-cervezas.entity";
import { Amargor } from "src/Amargor/entity/amargor.entity";
import { Formato } from "src/Formato/Formatos.entity";

@Entity({name: "Cerveza"})
export class Cerveza {

  @PrimaryGeneratedColumn()
  public id: number; 
  
  @Column()
  public nombre: string;
  
  @Column()
  public marca: string;
  
  @Column({name: 'id_tipo'})
  public id_tipo: number;
  
  @Column()
  public stock: number;
  
  @Column()
  public descripcion: string;
  
  @Column()
  public precio: number;
  
  @Column({name: 'id_proveedor'})
  public id_proveedor: number;
  
  @Column({name: 'id_amargor'})
  public id_amargor: string;
  
  @Column({ precision: 3, scale: 1 })
  public graduacion: number;
  
  @Column({name: 'id_formato'})
  public id_formato: string;
  
  @Column()
  public imagen: string;

  @Column()
  public is_active: boolean;

  @ManyToOne(() => Proveedor)
  @JoinColumn({ name: 'id_proveedor' })
  proveedor: Proveedor;

  @ManyToOne(() => TipoCerveza )
  @JoinColumn({ name: 'id_tipo' })
  tipo: TipoCerveza;

  @ManyToOne(() => Amargor )
  @JoinColumn({ name: 'id_amargor' })
  amargor: Amargor;

  @ManyToOne(() => Formato )
  @JoinColumn({ name: 'id_formato' })
  formato: Formato;
}

