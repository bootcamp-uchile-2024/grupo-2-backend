import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { SalidaUsuarioDto } from './dto/salida-usuario.dto';
import { DireccionesService } from 'src/Datos_Envio/direcciones.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioMapper } from './mapper/usuario.mapper';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private readonly usuariosRepository: Repository<Usuario>,
              @InjectRepository(Direccione) private readonly datosEnvioRepository: Repository<Direccione>,
              @InjectRepository(Pedido) private readonly pedidoRepository: Repository<Pedido>) {}
//=======================================================================================================
  async create(createUsuarioDto: CreateUsuarioDto) {
    const existe = await this.usuariosRepository.existsBy({rut: createUsuarioDto.rut})
    if(!existe){
      const usuario = new Usuario();
      usuario.nombre = createUsuarioDto.nombre;
      usuario.apellido = createUsuarioDto.apellido;
      usuario.contrasenia = createUsuarioDto.contrasenia;
      usuario.edad = createUsuarioDto.edad;
      usuario.rut = createUsuarioDto.rut;
      usuario.correo_comprador = createUsuarioDto.correo_comprador;
      usuario.telefono_comprador = createUsuarioDto.telefono_comprador;
      
      if(Object.values(TipoSuscripcion).includes(createUsuarioDto.tipo_suscripcion as TipoSuscripcion)){
        usuario.tipo_suscripcion = createUsuarioDto.tipo_suscripcion as TipoSuscripcion;

      const usuario_guardado = await this.usuariosRepository.save(usuario);
      return createUsuarioDto;
    }else{
      throw new HttpException('El rut ingresado ya tiene un usuario creado', HttpStatus.BAD_REQUEST);
    }
  }
}
 //======================================================================================================= 
  async findAll(): Promise<SalidaUsuarioDto[]>{
    const resultado = await this.usuariosRepository.find({
      select:{
        nombre: true,
        apellido: true,
        edad: true,
        rut: true,
        tipo_suscripcion: true,
      }
    })
    const respuesta = resultado.map((entidad) => UsuarioMapper.entityToDto(entidad));
    return respuesta;
    }

  
  async findOne(id: string): Promise<SalidaUsuarioDto> {
    const usuario = await this.usuariosRepository.findOneBy({rut: id});
    if(usuario){
      const respuesta = UsuarioMapper.entityToDto(usuario);
      return respuesta;
    }else{
      throw new HttpException('El rut ingresado no tiene usuario creado', HttpStatus.BAD_REQUEST);
    }
  }
  
  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const existe = await this.usuariosRepository.existsBy({rut: id})
    if (existe){
      const cambios = UsuarioMapper.dtoToEntity(updateUsuarioDto);
      cambios.rut = id;
      const guardado = await this.usuariosRepository.update(id, cambios);
      return updateUsuarioDto;
    }else{
      throw new HttpException('El rut ingresado no tiene usuario creado', HttpStatus.BAD_GATEWAY);
    }
  }

  /*
  async remove(id: string) {
    const existe = await this.usuariosRepository.existsBy({rut: id});
    if (existe){
      const existenDatos = await this.datosEnvioRepository.existsBy({rut_usuario: id});
      if (existenDatos){
        const remover_datos = await this.datosEnvioRepository.delete({rut_usuario: id});
      }
      const existenPedidos = await this.pedidoRepository.existsBy({rut_comprador: id});
      if (existenPedidos){
        const remover_datos = await this.pedidoRepository.delete({rut_comprador: id});
      }
      //const removido = await this.usuariosRepository.delete(id);
      return 'Usuario eliminado';
    }else{
      throw new HttpException('El rut ingresado no tiene usuario creado', HttpStatus.BAD_GATEWAY);
    }
  }*/
}
