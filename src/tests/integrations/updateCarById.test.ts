import { prisma } from "../../database/prisma"
import { carMock, invalidDataCarMock, updateCarMock } from "../mocks/cars.mocks"
import { request } from "../utils/request"

describe("Integration test: update a car by id", () => {
    
    beforeEach(async () => {
        await prisma.$transaction([
            prisma.car.deleteMany()
        ])
    })

    test("should update a car successfully", async () => {
        await prisma.car.create({data: carMock})

        const data = await request
        .patch(`/cars/${carMock.id}`)
        .send(updateCarMock)
        .expect(200)
        .then((response) => response.body)

        expect(data.id).toBeDefined()
        expect(data.name).toBe(carMock.name)
        expect(data.description).toBe(updateCarMock.description)
        expect(data.brand).toBe(carMock.brand)
        expect(data.year).toBe(carMock.year)
        expect(data.km).toBe(carMock.km)
    })

    test("should throw an error when id is invalid", async () => {
        const data = await request
        .patch("/cars/1")
        .expect(404)
        .then((response) => response.body)

        expect(data.message).toBe("Car not found.")
    })

    test("should throw error when try to update a car with invalid data types", async () => {
        await prisma.car.create({data: carMock})

        await request.patch(`/cars/${carMock.id}`).send(invalidDataCarMock).expect(400);
    })
})