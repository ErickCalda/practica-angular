
import mongoose from "mongoose";

const ejemploShemas= mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },

    apellido:{
        type:String,
        required:true
    },
    edad:{
        type:String,
        required:true
    },
    contacto:{
        type:[String],
        required:false
    }

})




const Ejemplo = mongoose.model('Ejemplo',ejemploShemas)


export default Ejemplo