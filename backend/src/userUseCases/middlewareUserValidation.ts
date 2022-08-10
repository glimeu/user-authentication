import { NextFunction, Request, Response } from "express"
import { validity } from "./validationUserData"

export interface UserSignup {
  email: string
  name: string
  password: string
}

export const middlewareUserValidation = async (request: Request, response: Response, next: NextFunction) => {
  const data: UserSignup = request.body
  console.log(data)
  const validation = await validity(data);
  console.log(validation)

  if (!validation) return response.status(400).json({message: "Os dados inseridos estão inválidos"});

  next()
}