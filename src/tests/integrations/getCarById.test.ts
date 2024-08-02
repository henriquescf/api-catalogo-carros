import { prisma } from "../../database/prisma"
import { carMock } from "../mocks/cars.mocks"
import { request } from "../utils/request"

describe("Integration test: get a car by id", () => {
    
    beforeEach(async () => {
        await prisma.$transaction([
            prisma.car.deleteMany()
        ])
    })

    test("should be able to get a car by id successfully", async () => {
        await prisma.car.create({data: carMock})

        const data = await request
        .get(`/cars/${carMock.id}`)
        .expect(200)
        .then((response) => response.body)

        expect(data).toStrictEqual(carMock)
    })

    test("should throw an error when id is invalid", async () => {
        const data = await request
        .get("/cars/1")
        .expect(404)
        .then((response) => response.body)

        expect(data.message).toBe("Car not found.")
    })

})