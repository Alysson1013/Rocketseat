import { ICategoriesRepository } from "../../repositories/ICategoriesRespository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){}

  async execute({description, name}: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already exists!")
    }

    this.categoriesRepository.create({
      name,
      description
    })
  }
}

export { CreateCategoryUseCase }