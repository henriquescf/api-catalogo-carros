import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import express, { json } from "express";
import helmet from 'helmet';
import cors from "cors";
import { carsRouter } from "./routes/cars.routes";
import { handleErrors } from "./errors/handleErrors";

export const app = express();

app.use(json())
app.use(helmet())
app.use(cors())
app.use("/cars", carsRouter)
app.use(handleErrors.execute)