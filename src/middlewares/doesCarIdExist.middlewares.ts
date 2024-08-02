import { NextFunction, Request, Response } from "express"
import { prisma } from "../database/prisma"

export class DoesCarIdExist{
    static async execute(req: Request, res: Response, next: NextFunction){
        const car = await prisma.car.findFirst({where: { id: Number(req.params.id)}})
        if(!car){
            return res.status(404).json({ message: "Car not found."});
        }
        next()
    }
}