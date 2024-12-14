import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { CarritoMapper } from './mapper/carrito.mapper';
import { PedidoCervezaMapper } from 'src/pedidos/mapper/pedido_cervezas.mapper';
import { Pedido_Cerveza } from 'src/pedidos/entities/pedido_cervezas.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UpdateCarritoRutDto } from './dto/update-carritoRut.dto';

@Injectable()
export class CarritoService {

  constructor(@InjectRepository(Carrito) private readonly repositoryCarrito: Repository<Carrito>,
              @InjectRepository(Pedido_Cerveza) private readonly repositoryPedidoCerveza: Repository<Pedido_Cerveza>,
              private readonly usuarioService: UsuariosService) {}
  
  async create(request: any): Promise<number>{
    const carrito = new Carrito();
    if(request.headers.authorization){
      carrito.rut_comprador = request.infoUsuario.rut;
    }
    carrito.pedido_cervezas = [];
    const carrito_guardado = await this.repositoryCarrito.save(carrito);
    return carrito_guardado.id;
  }

  async findOne(id: number) {
    const resultado: Carrito = await this.repositoryCarrito.findOne({
      where: {id: id},
      relations: {pedido_cervezas: true}
    })
    const dto = CarritoMapper.entityToDto(resultado)
    return dto;
    }

  async updateCervezas(id: number, updateCarritoDto: UpdateCarritoDto) {
    const pedidos = PedidoCervezaMapper.dtoToEntityList(id, updateCarritoDto);
    const pedidos_existentes = await this.repositoryPedidoCerveza.find({
      where: {
        id_carrito: id,
      }})

    if(pedidos_existentes.length > 0){
      for(const pe of pedidos_existentes){
        if (pedidos.indexOf(pe) < 0){
          await this.repositoryPedidoCerveza.delete(pe)
        }else{
          await this.repositoryPedidoCerveza.save(pe)
        }
      }
      for(const pe of pedidos){
        if (pedidos_existentes.indexOf(pe) < 0){
          await this.repositoryPedidoCerveza.save(pe)
        }
      }
    }
    else{
      for(const pe of pedidos){
          await this.repositoryPedidoCerveza.save(pe)
      }
    }

    return this.findOne(id);
  }

  async updateRut(id: number, updateCarritoRutDto: UpdateCarritoRutDto): Promise<Carrito> {
    const existe_usuario = this.usuarioService.existsByRut(updateCarritoRutDto.Rut);
    if(existe_usuario){
      const carrito = await this.repositoryCarrito.findOne({
        where: {id: id}
      })
      if(carrito){
        carrito.rut_comprador = updateCarritoRutDto.Rut;
        await this.repositoryCarrito.save(carrito);
        return carrito;
      }else{
        throw new HttpException('No existe el carrito con el id ingresado', HttpStatus.BAD_REQUEST);
      }
    }else{
      throw new HttpException('No existe un usuario con el rut ingresado', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    await this.repositoryPedidoCerveza.delete({id_carrito: id})
    await this.repositoryCarrito.delete(id)
    return `Se elimino el carrito con ID ${id}`;
  }
}
