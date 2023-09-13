import express from "express";
import dotenv from "dotenv";

import routerBases from "./routes/routes.js";

const app = express()

dotenv.config()
const port = process.env.PORT256

app.use(express.json())

app.listen(port,()=>{
    console.log('Servidor Iniciado');
})



app.use('/hamburguesas', routerBases)