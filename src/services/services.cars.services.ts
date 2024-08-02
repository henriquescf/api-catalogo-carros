import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TCreateCarBody, TUpdateCarBody } from "../interfaces/cars.interfaces";

@injectable()
export class CarsServices{
    async createCar(body: TCreateCarBody){
        return await prisma.car.create({data: body})
    }

    async getCars(){
        return await prisma.car.findMany()
    }

    async getCarById(carId: string){
        return await prisma.car.findFirst({where: {id: Number(carId)}})
    }

    async updateCarById(body: TUpdateCarBody, carId: string){
        return await prisma.car.update({
            where: {
                id: Number(carId)
            },
            data: body
        })
    }

    async deleteCarById(carId: string){
        return await prisma.car.delete({where: {id: Number(carId)}})
    }
}