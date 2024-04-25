/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CategoriaRepository } from './repositories/categoria-repository';
import { PrismaCategoriaRepository } from './repositories/prisma/prisma-categoria-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: CategoriaRepository,
      useClass: PrismaCategoriaRepository
    }
  ],
})
export class AppModule {}
