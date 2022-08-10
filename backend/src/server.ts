import { Request, Response } from "express";
import { randomBytes } from "crypto";
import { middlewareUserValidation } from "./userUseCases/middlewareUserValidation";
import express from 'express';
import { UserProps, saveUser } from './userUseCases/saveUserDatabase';
import fs from 'fs';

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/users', (_request: Request, response: Response) => {
  fs.promises.readFile('./users.json', 'utf-8')
    .then((data) => {
      const AllUsers = data
      response.status(200).json(JSON.parse(AllUsers));
    })
})

app.post('/user', middlewareUserValidation, (request: Request, response: Response) => {
  const userData: UserProps = {
    id: randomBytes(6).toString('hex'),
    ...request.body
  };
  saveUser(userData);
  response.status(200).json(userData)
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));