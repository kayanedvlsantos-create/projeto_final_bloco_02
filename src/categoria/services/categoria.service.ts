import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriaService {

  findAll() {
    return `This action returns all categoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
