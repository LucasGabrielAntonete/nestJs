import { Controller, Get } from '@nestjs/common';
import { CreateCategoryBody } from './dtos/create-categoria-body';
import { CategoriaRepository } from './repositories/categoria-repository';
@Controller()
export class AppController {
  constructor(private categoriaRepository: CategoriaRepository) {}

  @Post()
  async getHello(@Body() body: CreateCategoryBody) {

    const {nome, descricao} = body;

    const this.categoriaRepository.create(nome, descricao);
  
    return {
      Categoria
    } 

  }
}
