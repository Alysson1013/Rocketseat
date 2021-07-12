import { Router } from 'express';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';

const upload = multer({
  dest: "./tmp", 
})

const createCategoryController = new CreateCategoryController()

const categoriesRoutes = Router()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get("/", (request, response) => listCategoriesController.handle(request, response))
categoriesRoutes.post("/import", upload.single("file"), (request, response) => importCategoryController.handle(request, response))

export { categoriesRoutes }
