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


router.get("/ejercicio3", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Chefs")
        const result = await collection.find({especialidad:"Carnes"}).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.put("/ejercicio4", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Ingredientes")
        const result = await collection.updateMany({},{$mul: { precio: 1.5 }})
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio5", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Chefs")
        const result = await collection.find({nombre:"ChefB"}).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio6", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Categorias")
        const result = await collection.find().toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio7", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Ingredientes")
        const result = await collection.deleteMany({stock:0})
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio8/:ingre", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Chefs")

        const query = { categoria: "Clásica" };
        const nuevoIngrediente = req.params.ingre;

        const result = await collection.updateOne(query, { $push: { ingredientes: nuevoIngrediente } });


        res.json(result);
        
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio9", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const panIntegral = await collection.find({ingredientes :/Pan integral/i}).toArray();

        res.json(panIntegral)


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio10", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Chefs")
        const ChefC = await collection.updateOne({nombre:"ChefC"},{$set:{especialidad: "Cocina Internacional"} })


        res.json(ChefC)

        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio11", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Ingredientes")
        const ingrediente = await collection.find().sort({precio: -1}).limit(1).toArray();

        res.json(ingrediente)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio12", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.find({ingredientes:{$ne:"Queso cheddar"}}).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio13", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Ingredientes")
        const result = await collection.updateMany({nombre:"Pan"},{$inc:{stock:100}})
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio14", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Ingredientes")
        const result = await collection.find({descripcion: /clásico/i }).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio15", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.find({precio:{$lte: 9}}).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio16", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Chefs")
        const result = await collection.aggregate([
            {
                $count: 'nombre'
            }
        ]).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio17", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Categorias")
        const result = await collection.find({descripcion: /gourmet/i }).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio18", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.deleteMany({$expr:{$lt:[{$size: "$ingredientes"},5]}})
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio19", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Chefs")
        const nuevoChefAsia = await collection.insertOne({"nombre":"ChefD","especialidad":"Cocina Asiática"})

        res.json(nuevoChefAsia)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio20", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.find().sort({precio: -1}).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio21", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Ingredientes")
        const result = await collection.find({precio:{$lte:5,$gt:2}}).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio22/:descripcion", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Ingredientes")

        const actualizarDescripcion = req.params.descripcion;

        const descripcion = await collection.updateMany({nombre:"Pan"},{$set:{descripcion: actualizarDescripcion}})

        res.json(descripcion)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio23", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const tomateLechuga = await collection.find({ingredientes:{$in:["Tomate","Lechuga"]}}).toArray()

        res.json(tomateLechuga)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio24", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Chefs")
        const result = await collection.find({nombre:{$ne: "ChefA"}}).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio25", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.updateMany({categoria: "Gourmet"},{$inc:{precio:2}})
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio26", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.aggregate([
            { $unwind: "$ingredientes" }, // Descompone el array "ingredientes" en registros separados
            { $sort: { "ingredientes": 1 } }, // Ordena alfabéticamente los registros
            {
              $group: {
                _id: "$_id", // Agrupa nuevamente por el ID del documento original
                ingredientes: { $push: "$ingredientes" } // Agrupa los ingredientes nuevamente en un array
              }
            }
          ]).toArray();
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio27", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.find().sort({precio:-1}).limit(1).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio28", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const query = { categoria: /Clásica/i };
      
        const resultado = await collection.updateMany(
          query,{ $push: { ingredientes: "Pepinillos" } }
        )

        const hamburguesasActualizadas= await collection.find(query).toArray()


        console.log(hamburguesasActualizadas);
        res.json(resultado)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio29", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Chefs")
        const result = await collection.deleteMany({especialidad: "Cocina Vegetariana"})
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio30", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.find({ingredientes:{$size: 7}}).toArray()
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio31", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
    
        const hamburguesa = await collection.find({ categoria: /gourmet/i }).sort({ precio: -1 }).limit(1).toArray();
        
        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio32", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
        const result = await collection.aggregate([
            {
                $unwind: "$ingredientes"
            },
            {
                $group: {
                    _id: "$ingredientes",
                    numHamburguesas: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]).toArray();
        
        res.json(result)
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})


router.get("/ejercicio33", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
    
        const hamburguesa = await collection.aggregate([
            {
                $group: {
                    _id: "$chef",
                    numHamburguesas: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    chef: "$_id",
                    numHamburguesas: 1
                }
            }
        ]).toArray();
        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio34", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
    
        const hamburguesa = await collection.aggregate([
            {
                $group: {
                    _id: "$categoria",
                    numCategoria: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    categoria: "$_id",
                    numCategoria: 1
                }
            },
            {
                $sort: { numCategoria: -1 }
            }
        ]).limit(1).toArray();

        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio35", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")

    
        const hamburguesa = await collection.aggregate([
            {
              $lookup: {
                from: "Chefs",
                localField: "chef",
                foreignField: "nombre",
                as: "jijiji",
              },
            },
            {
              $lookup: {
                from: "Ingredientes",
                localField: "ingredientes",
                foreignField: "nombre",
                as: "jojojoj",
              },
            },
            {
              $unwind: "$jojojoj"
            },
            {
              $unwind: "$jijiji"
            },
            {
              $group: {
                _id: "$jijiji.nombre",
                Total: { $sum: "$jojojoj.precio" },
              },
            }
          ]).toArray();
        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio36", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Ingredientes")
    
        const hamburguesa = await collection.aggregate([
            {
              $lookup: {
                from: "Hamburguesas",
                localField: "nombre",
                foreignField: "ingredientes",
                as: "hamburguesas_con_este_ingrediente",
              },
            },
            {
              $match: {
                hamburguesas_con_este_ingrediente: { $size: 0 },
              },
            },
            {
                $project: {
                    "_id": 0,
                    "nombre": 1
                }
            }
          ]).toArray();

        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio37", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
    
        const hamburguesa = await collection.aggregate([
            {
                $lookup: {
                  from: "Categorias",
                  localField: "categoria",
                  foreignField: "nombre",
                  as: "elo"
                }
            },
            {
                $unwind: "$elo"
            },
            {
                $project: {
                  "elo._id": 0,
                  "elo.nombre": 0,
                  "_id": 0,
                  "ingredientes": 0,
                  "chef": 0,
                  "__v": 0,
                  "precio": 0,
                  "nombre": 0
                }
            }
        ]).toArray();
        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio38", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
    
        const hamburguesa = await collection.aggregate([
            {
                $unwind: "$ingredientes"
            },
            {
                $group: {
                    _id: "$chef",
                    totalIngredientes: { $sum: 1 }
                }
            },
            {
                $sort: { totalIngredientes: -1 }
            },
            {
                $limit: 1
            },
            {
                $project: {
                    _id: 0,
                    chef: "$_id",
                    totalIngredientes: 1
                }
            }
        ]).toArray();

        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio39", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
    
        const hamburguesa = await collection.aggregate([
            {
                $group: {
                    _id: "$categoria",
                    precioPromedio: { $avg: "$precio" }
                }
            },
            {
                $project: {
                    _id: 0,
                    categoria: "$_id",
                    precioPromedio: 1
                }
            }
        ]).toArray();

        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})

router.get("/ejercicio40", async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection("Hamburguesas")
    
        const hamburguesa = await collection.aggregate([
            {
                $group: {
                    _id: "$chef", 
                    hamburguesaMasCara: { $max: { nombre: "$nombre", precio: "$precio" } } 
                }
            },
            {
                $project: {
                    _id: 0,
                    chef: "$_id",
                    hamburguesaMasCara: 1
                }
            }
        ]).toArray();

        res.json(hamburguesa)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
 
    }finally{
        const client = new MongoClient(bases);
        await client.connect();
        client.close(console.log("Servidor cerrado"))
    }
})



export default router;