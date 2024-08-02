import { Request, Response } from "express";
import { AppError } from "../errors/appError";
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";

export class handleErrors{
    static execute(error: Error, req: Request, res: Response){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({message: error.message})
        }

        if(error instanceof JsonWebTokenError){
            return res.status(403).json({message: error.message})
        }

        if(error instanceof ZodError){
            return res.status(409).json(error)
        }

        console.log(error)
        return res.status(500).json({message: "Internal server error"})
    }
}