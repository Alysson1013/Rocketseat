import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import multer from 'multer'

const upload = multer({
  dest: "./tmp", 
})

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response))
categoriesRoutes.get("/", (request, response) =>  listCategoriesController.handle(request, response))
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request
  console.log(file)
  return response.send()
})

export { categoriesRoutes }
