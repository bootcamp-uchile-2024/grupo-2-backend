import { Suscripcione } from "src/suscripciones/entities/suscripcione.entity";

export class Usuario {

    public rut: string;

    public nombre: string;

    public apellido: string;

    public contrasenia: string;

    public edad: number;

    public id_perfil: number;

    public tipo_suscripcion: Suscripcione;
}
