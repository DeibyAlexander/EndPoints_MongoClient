import express from "express";
import dotenv from "dotenv";

import routerBases from "./routes/routes.js";

import swaggerUI from 'swagger-ui-express';
import swagger from './Swagger.json' assert {type: 'json'}


const app = express()

dotenv.config()
const port = process.env.PORT256

app.use(express.json())

app.listen(port,()=>{
    console.log('Servidor Iniciado');
})


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));
  


app.use('/hamburguesas', routerBases)