import { Router } from "express";
import { CarsControllers } from "../controllers/cars.controllers";
import { container } from "tsyringe";
import { CarsServices } from "../services/services.cars.services";
import { ValidateBody } from "../middlewares/validateBody.middlewares";
import { createCarSchema, updateCarSchema } from "../schemas/cars.schemas";
import { DoesCarIdExist } from "../middlewares/doesCarIdExist.middlewares";

export const carsRouter = Router()

container.registerSingleton("CarsServices", CarsServices)

const carsControllers = container.resolve(CarsControllers)

carsRouter.post("/", ValidateBody.execute({body: createCarSchema}), (req, res) => carsControllers.createCar(req, res))
carsRouter.get("/", (req, res) => carsControllers.getCars(req, res))
carsRouter.get("/:id", DoesCarIdExist.execute, (req, res) => carsControllers.getCarById(req, res))
carsRouter.patch("/:id", ValidateBody.execute({body: updateCarSchema}), DoesCarIdExist.execute, (req, res) => carsControllers.updateCarById(req, res))
carsRouter.delete("/:id", DoesCarIdExist.execute, (req, res) => carsControllers.deleteCarById(req, res))