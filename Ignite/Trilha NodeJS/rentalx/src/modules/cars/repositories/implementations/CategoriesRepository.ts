import { Category } from "../../models/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRespository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    } 
    return CategoriesRepository.INSTANCE;
  }

  private constructor() {
    this.categories = []
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name == name);
    return category
  }
}

export { CategoriesRepository }