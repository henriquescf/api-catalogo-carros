import { container } from "tsyringe"
import { carMock, updateCarMock } from "../mocks/cars.mocks"
import { CarsServices } from "../../services/services.cars.services"
import { prismaMock } from "../mocks/prisma"

describe("Unit test: get a car by id", () => {
    test("update a car by id should work correctly", async () => {
        const carsServices = container.resolve(CarsServices)

        prismaMock.car.update.mockResolvedValue(carMock)

        const data = await carsServices.updateCarById(updateCarMock, carMock.id.toString())

        expect(data).toStrictEqual(carMock)
    })
})