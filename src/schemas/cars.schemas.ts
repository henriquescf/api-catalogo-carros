import { z } from "zod"

export const carsSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    description: z.string().min(1).optional(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().nonnegative()
})

export const createCarSchema = carsSchema.omit({id: true})
export const updateCarSchema = carsSchema.partial()