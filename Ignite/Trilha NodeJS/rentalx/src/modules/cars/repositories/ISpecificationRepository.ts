import { Specification } from "../entities/Specification";

interface ISpecificationRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ISpecificationRepositoryDTO): Promise<void>
  findByName(name: string): Promise<Specification>
}

export {
  ISpecificationRepository,
  ISpecificationRepositoryDTO
}