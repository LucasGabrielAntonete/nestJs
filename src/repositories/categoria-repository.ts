export abstract class CategoriaRepository {
  abstract create(name:string, categoria: string): Promise<void>
}