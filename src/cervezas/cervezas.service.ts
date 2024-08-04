import { Injectable } from '@nestjs/common';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';

@Injectable()
export class CervezasService {
  create(createCervezaDto: CreateCervezaDto) {
    return 'This action adds a new cerveza';
  }

  findAll() {
    return `Modulo cervezas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cerveza`;
  }

  update(id: number, updateCervezaDto: UpdateCervezaDto) {
    return `This action updates a #${id} cerveza`;
  }

  remove(id: number) {
    return `This action removes a #${id} cerveza`;
  }
}
