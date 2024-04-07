import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService,) {}

  @Get()
  async getHello() {
   const Categoria = await this.prisma.categoria.create({
    data: {
      id: randomUUID(),
      nome: 'Categoria 1',
      descricao: 'Descrição da categoria 1',
    }
   });

    return {
      Categoria
    } 

  }
}
