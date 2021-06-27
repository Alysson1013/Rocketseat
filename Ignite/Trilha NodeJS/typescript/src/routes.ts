import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response){
  CreateCourseService.execute({
    name: "nodejs",
    educator: "dani",
    duration: 10
  })

  CreateCourseService.execute({
    name: "reactjs",
    educator: "Diego"
  })

  return res.send()
}