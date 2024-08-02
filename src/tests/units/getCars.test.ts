import { container } from "tsyringe"
import { CarsServices } from "../../services/services.cars.services"
import { prismaMock } from "../mocks/prisma"
import { carListMock } from "../mocks/cars.mocks"

describe("Unit test: get all cars", () => {
    test("get all cars should work correctly", async () => {
        const carsServices = container.resolve(CarsServices)

        prismaMock.car.findMany.mockResolvedValue(carListMock)

        const data = await carsServices.getCars()

        expect(data[0]).toStrictEqual(carListMock[0])
        expect(data[1]).toStrictEqual(carListMock[1])
    })
})