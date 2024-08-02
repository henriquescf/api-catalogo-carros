import { container } from "tsyringe"
import { carMock } from "../mocks/cars.mocks"
import { CarsServices } from "../../services/services.cars.services"
import { prismaMock } from "../mocks/prisma"

describe("Unit test: get a car by id", () => {
    test("get a car by id should work correctly", async () => {
        const carsServices = container.resolve(CarsServices)

        prismaMock.car.findFirst.mockResolvedValue(carMock)

        const data = await carsServices.getCarById(carMock.id.toString())

        expect(data).toStrictEqual(carMock)
    })
})