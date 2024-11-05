import mongoose from "mongoose";
import { type } from "os";

const estudianteShemas = mongoose.Schema({

        nombre:{
            type: String,
            require:true

        },

        
        materia:{
            type: String,
            require:true

        },
        profesor:{
            type: String,
            require:true

        },
        aula:{
            type: String,
            require:true

        }



})

const Estudiante = mongoose.model('/Estudiante',estudianteShemas)

export default Estudiante 