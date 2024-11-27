import express from 'express'
import cors from 'cors'
import * as db from '../db/cnn.mongodb.js';
import indexRoutes from '../routes/index.routes.js';


export class Server{


    constructor(){

        this.app = express();
        this.port= process.env.PORTS || 3000
        this.rutaGeneral = '/api/'

        this.mongodbConexion();
        this.midleware();
        this.routes();
    }

    async mongodbConexion(){
        if(!db.conexion){
            await db.conexionMongodb()
        }

    }




    routes(){
        this.app.use(this.rutaGeneral,indexRoutes)
        this.app.use('**',(req,res)=>{
            res.json({
                msg:'ruta no encontrada'
            })
        })

    }

    midleware(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public')) 
        this.app.use('/uploads', express.static('uploads'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('escuchuando em el puerto 3000')
        })
    }
}