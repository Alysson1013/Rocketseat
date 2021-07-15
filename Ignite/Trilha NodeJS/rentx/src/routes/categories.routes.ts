import { Router } from 'express';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryCategoryController';
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';

const upload = multer({
  dest: "./tmp", 
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

const categoriesRoutes = Router()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get("/",  listCategoriesController.handle)
categoriesRoutes.post("/import", importCategoryController.handle)

export { categoriesRoutes }
