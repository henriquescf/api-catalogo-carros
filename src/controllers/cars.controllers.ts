import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { CarsServices } from "../services/services.cars.services";

@injectable()
export class CarsControllers{
    constructor(@inject("CarsServices") private carsServices: CarsServices) {}
    
    async createCar(req: Request, res: Response): Promise<Response>{
        const response = await this.carsServices.createCar(req.body)
        return res.status(201).json(response)
    }

    async getCars(req: Request, res: Response): Promise<Response>{
        const response = await this.carsServices.getCars()
        return res.status(200).json(response)
    }

    async getCarById(req: Request, res: Response): Promise<Response>{
        const response = await this.carsServices.getCarById(req.params.id)
        return res.status(200).json(response)
    }

    async updateCarById(req: Request, res: Response): Promise<Response>{
        const response = await this.carsServices.updateCarById(req.body, req.params.id)
        return res.status(200).json(response)
    }

    async deleteCarById(req: Request, res: Response): Promise<Response>{
        const response = await this.carsServices.deleteCarById(req.params.id)
        return res.status(204).json(response)
    }

}