import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { EstadoUsuario, UpdateUsuarioDto } from './dto/update-usuario.dto';
import { SalidaUsuarioDto } from './dto/salida-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioMapper } from './mapper/usuario.mapper';
import { Direccione } from 'src/Datos_Envio/entities/direccione.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { TipoSuscripcion } from 'src/enum/tipo-suscripcion';
import { Credencial } from './dto/credencial.dto';
import { createHash } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { CreateUsuarioInvitadoDto } from './dto/create-usuarioInvitado.dto';
import { Contrasena } from './dto/contrasena.dto';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private readonly usuariosRepository: Repository<Usuario>,
    @InjectRepository(Direccione) private readonly datosEnvioRepository: Repository<Direccione>,
    @InjectRepository(Pedido) private readonly pedidoRepository: Repository<Pedido>,
    private readonly jwtService: JwtService) { }

  async existsByRut(rut_entrada: string): Promise<boolean> {
    const usuario = await this.usuariosRepository.findOneBy({rut: rut_entrada});
    return !!usuario;
  }

  //=======================================================================================================
  async create(createUsuarioDto: CreateUsuarioDto) {
    const existe = await this.usuariosRepository.existsBy({ rut: createUsuarioDto.rut })
    if (!existe) {
      const usuario = new Usuario();
      usuario.nombre = createUsuarioDto.nombre;
      usuario.apellido = createUsuarioDto.apellido;

      const modo = 'md5';
      const hash = createHash(modo).update(createUsuarioDto.contrasenia).digest('hex');
      usuario.contrasenia = hash;

      usuario.edad = createUsuarioDto.edad;
      usuario.rut = createUsuarioDto.rut;
      usuario.correo_comprador = createUsuarioDto.correo_comprador;
      usuario.telefono_comprador = createUsuarioDto.telefono_comprador;
      usuario.rol = createUsuarioDto.rol;
      usuario.is_active = true;

      if (Object.values(TipoSuscripcion).includes(createUsuarioDto.tipo_suscripcion as TipoSuscripcion)) {
        usuario.tipo_suscripcion = createUsuarioDto.tipo_suscripcion as TipoSuscripcion;
        const usuario_guardado = await this.usuariosRepository.save(usuario);
        return createUsuarioDto;
      }
    }else {
      const usuario = await this.usuariosRepository.findOneBy({ rut: createUsuarioDto.rut });
      if(usuario.contrasenia == null){
        const modo = 'md5';
        const hash = createHash(modo).update(createUsuarioDto.contrasenia).digest('hex');
        usuario.contrasenia = hash;
        await this.usuariosRepository.save(usuario);
      }else{
        throw new HttpException('El rut ingresado ya tiene un usuario y contraseña creado', HttpStatus.BAD_REQUEST);
      }
    }
  }
  
  async createInvitado(createUsuarioDto: CreateUsuarioInvitadoDto) {
    const existe = await this.usuariosRepository.existsBy({ rut: createUsuarioDto.rut })
    if (!existe) {
      const usuario = new Usuario();
      usuario.nombre = createUsuarioDto.nombre;
      usuario.apellido = createUsuarioDto.apellido;
      usuario.edad = createUsuarioDto.edad;
      usuario.rut = createUsuarioDto.rut;
      usuario.correo_comprador = createUsuarioDto.correo_comprador;
      usuario.telefono_comprador = createUsuarioDto.telefono_comprador;
      usuario.rol = createUsuarioDto.rol;
      usuario.is_active = true;

      if (Object.values(TipoSuscripcion).includes(createUsuarioDto.tipo_suscripcion as TipoSuscripcion)) {
        usuario.tipo_suscripcion = createUsuarioDto.tipo_suscripcion as TipoSuscripcion;
        const usuario_guardado = await this.usuariosRepository.save(usuario);
        return createUsuarioDto;
      }
      
    }else {
      throw new HttpException('El rut ingresado ya tiene un usuario creado', HttpStatus.BAD_REQUEST);
    }
  }
  //======================================================================================================= 
  async findAll(): Promise<SalidaUsuarioDto[]> {
    const resultado = await this.usuariosRepository.find({
      select: {
        nombre: true,
        apellido: true,
        edad: true,
        rut: true,
        correo_comprador: true,
        telefono_comprador: true,
        tipo_suscripcion: true, 
        rol: true,
        is_active: true
      }
    })
    const respuesta = resultado.map((entidad) => UsuarioMapper.entityToDto(entidad));
    return respuesta;
  }
//=======================================================================================================

  async findOne(rut: string): Promise<SalidaUsuarioDto> {
    const usuario = await this.usuariosRepository.findOne({where:{ rut: rut} });
    if (usuario) {
      const respuesta = UsuarioMapper.entityToDto(usuario);
      return respuesta;
    } else {
      throw new HttpException('El rut ingresado no tiene usuario creado', HttpStatus.BAD_REQUEST);
    }
  }
//=======================================================================================================
  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const existe_usuario = await this.usuariosRepository.findOne({where:{ rut: id} });
    const existe_correo = await this.usuariosRepository.findOne({where:{ correo_comprador: updateUsuarioDto.correo_comprador} });

    if (existe_usuario){
      if (existe_usuario.correo_comprador == updateUsuarioDto.correo_comprador || !existe_correo){
        const cambios = UsuarioMapper.dtoToEntity(updateUsuarioDto);
        cambios.rut = id;
        const guardado = await this.usuariosRepository.update(id, cambios);
        return updateUsuarioDto;
      }else{
        throw new HttpException('El correo que intena ingresar ya existe en nuestra base de datos', HttpStatus.BAD_GATEWAY);
      }
    }else{
      throw new HttpException('El rut ingresado no existe nuestra base de datos', HttpStatus.BAD_GATEWAY);
    }
  }
  

  async login(credenciales: Credencial): Promise<string> {
    const usuario = await this.usuariosRepository.findOne({where: {correo_comprador: credenciales.correo}});
    const hash = createHash('md5').update(credenciales.password).digest('hex');
    if(usuario && usuario.contrasenia == hash){
      const payload = {
        rut: usuario.rut,
        email: usuario.correo_comprador,
        role: usuario.rol
      };
      const jwt = this.jwtService.sign(payload);
      return jwt;
    }else{
      throw new HttpException('Las credenciales no son válidas', HttpStatus.UNAUTHORIZED);
    }
  }

  async updateContrasena( contrasenas: Contrasena, infoUsuario): Promise<string> {
    const usuario = await this.usuariosRepository.findOne({where: {rut: infoUsuario.rut}});
    const hash = createHash('md5').update(contrasenas.contrasena_actual).digest('hex');
      if(usuario.contrasenia == hash){
        usuario.contrasenia = createHash('md5').update(contrasenas.contrasena_nueva).digest('hex');
        await this.usuariosRepository.save(usuario);
        return 'Contraseña actualizada';
      }else{
        throw new HttpException('La contraseña actual no es válida', HttpStatus.UNAUTHORIZED);
      }
    
  }

  async updateIsActive( rut: string, estado: EstadoUsuario): Promise<string> {
    const usuario = await this.usuariosRepository.findOne({where: {rut: rut}});
    if(usuario){
      usuario.is_active = estado.is_active;
      await this.usuariosRepository.save(usuario);
      return 'estado actualizado';
    }else{
      throw new HttpException('La contraseña actual no es válida', HttpStatus.UNAUTHORIZED);
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
