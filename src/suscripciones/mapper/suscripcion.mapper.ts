import { Suscripcion } from "../entities/suscripcione.entity"
import { getSuscripcion } from "../dto/getSuscripcion.dto"

export class SuscripcionMapper{

    static entityToDto(entidad: Suscripcion): getSuscripcion{
        const suscrip = new getSuscripcion
        suscrip.nombre = entidad.nombre;
        suscrip.descuento = entidad.descuento;
        suscrip.precio = entidad.precio;
        suscrip.tipo_envio = entidad.tipo_envio;
        suscrip.descripcion = entidad.descripcion;
        return suscrip
    }
}