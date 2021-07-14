import { Router } from 'express'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController

specificationRoutes.post("/", (request, response) => createSpecificationController.handle)

export {
  specificationRoutes
}