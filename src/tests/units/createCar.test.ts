import { container } from "tsyringe"
import { carMock, createCarMock } from "../mocks/cars.mocks"
import { CarsServices } from "../../services/services.cars.services"
import { prismaMock } from "../mocks/prisma"

describe("Unit test: create a car", () => {
    test("create a car should work correctly", async () => {
        const carServices = container.resolve(CarsServices)

        prismaMock.car.create.mockResolvedValue(carMock)

        const data = await carServices.createCar(createCarMock)

        expect(data).toStrictEqual(carMock)
    })
})