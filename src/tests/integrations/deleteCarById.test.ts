import { prisma } from "../../database/prisma"
import { carMock } from "../mocks/cars.mocks"
import { request } from "../utils/request"

describe("Integration test: delete a car", () => {
    
    beforeEach(async () => {
        await prisma.$transaction([
            prisma.car.deleteMany()
        ])
    })

    test("should delete a car by id successfully", async () => {
        await prisma.car.create({data: carMock})
        await request
        .delete(`/cars/${carMock.id}`)
        .expect(204)
    })

    test("should throw an error when id is invalid", async () => {
        const data = await request
        .delete("/cars/1")
        .expect(404)
        .then((response) => response.body)

        expect(data.message).toBe("Car not found.")
    })
})