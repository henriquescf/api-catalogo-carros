import { prisma } from "../../database/prisma"
import { carListMock } from "../mocks/cars.mocks"
import { request } from "../utils/request"

describe("Integration test: get all cars", () => {
    
    beforeEach(async () => {
        await prisma.$transaction([
            prisma.car.deleteMany()
        ])
    })

    test("should be able to get all cars successfully", async () => {
        await prisma.car.createMany({data: carListMock})

        const data = await request
        .get("/cars")
        .expect(200)
        .then((response) => response.body)

        expect(data).toHaveLength(2)
        expect(data[0]).toStrictEqual(carListMock[0])
        expect(data[1]).toStrictEqual(carListMock[1])
    })
})