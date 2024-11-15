import { ApiProperty } from "@nestjs/swagger";

export class createProveedor{
  @ApiProperty({default: 'Cervezas sureñas S.A.' ,description: 'nombre del proveedor'})
  public nombre: string;

  @ApiProperty({default: 'Valdivia' ,description: 'id de la comuna del proveedor'})  
  public id_comuna: number;

  @ApiProperty({default: 'Cristian Perez' ,description: 'nombre del contacto del proveedor'})  
  public contacto: string;

  @ApiProperty({default: '56988654213' ,description: 'telefono de contacto del proveedor'})  
  public telefono: string; 

  @ApiProperty({default: 'cristian.perez@ejemplo.cl' ,description: 'correo de contacto del proveedor'})  
  public correo_electronico: string;

}