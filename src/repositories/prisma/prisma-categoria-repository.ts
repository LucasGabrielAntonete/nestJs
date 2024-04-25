import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "crypto";
import { CategoriaRepository } from "../categoria-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaCategoriaRepository implements CategoriaRepository {
    constructor(private prisma: PrismaService) {}


  async create(nome:string, descricao: string): Promise<void> {
       await this.prisma.categoria.create({
        data: {
            id: randomUUID(),
            nome,
            descricao
        },
    }
);
}}