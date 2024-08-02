import { container } from "tsyringe"
import { carMock } from "../mocks/cars.mocks"
import { CarsServices } from "../../services/services.cars.services"

describe("Unit test: delete a car by id", () => {
    test("delete a car by id should work correctly", async () => {
        const carsServices = container.resolve(CarsServices)
        
        await carsServices.deleteCarById(carMock.id.toString())
    })
})