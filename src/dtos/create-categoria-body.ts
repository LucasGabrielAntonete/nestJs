import { IsNotEmpty } from 'class-validator'

export class CreateCategoryBody {
    @IsNotEmpty({
        message: 'Nome é obrigatório'
    })
    nome: string
    descricao: string
}