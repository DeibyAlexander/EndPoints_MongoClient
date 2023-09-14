import express from "express";
import { MongoClient } from "mongodb";
import  dotenv from "dotenv";

dotenv.config()

const router = express.Router()

const bases = process.env.DDBB;
const nombreBase = 'Hamburgueseria'


router.get('/holi', async (req,res)=>{
    try {
      res.json("Estoy")  
    } catch (error) {
        console.log(error);
    }
})

router.get('/ejercicio1', async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("Ingredientes")
        const result = await collection.find({stock : { $lt : 400}}).toArray()
        
        res.json(result)

        client.close()
    } catch (error) {
        res.status()
        console.log(error);
    }
})

router.get('/ejercicio2', async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("Hamburguesas")
        const result = await collection.find({categoria :"Vegetariana"}).toArray()
        
        res.json(result)

        client.close()
    } catch (error) {
        res.status()
        console.log(error);
    }
})


router.get("/ejercicio")


export default router;