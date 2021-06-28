import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body
  const createSpecification = new CreateSpecificationService(specificationRepository)

  createSpecification.execute({
    name,
    description
  })

  return response.status(201).send()
})

export {
  specificationRoutes
}