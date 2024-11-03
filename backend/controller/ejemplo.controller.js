import Ejemplo from "../module/ejemplo.module.js";
import mongoose from "mongoose";
import express from "express"
import { error } from "ajv/dist/vocabularies/applicator/dependencies.js";

export class Controller{



getEjemplos = async (req,res)=>{
    console.log('obtine todos los ejemplos')

    try {
     const ejemplos =   await Ejemplo.find({},{__v:0});

        if(ejemplos.length===0){

            return res.status(400).json({
                    msg:'No se encontraron ejemplos'
                })
        }
        res.status(200).json(ejemplos);

        
     
    } catch (error) {
       return res.status(500).json({
            msg:'error al octener ejemplos'
        })

        }
        
    
}


 getEjemploID = async (req, res) =>{

    console.log('busqueda por id')
    const id = req.params.id;
    try {
       if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            msg:'id no valido'
        })

       }

       const ejemplo = await Ejemplo.findById(id)
       if(!ejemplo){
        return res.status(404).json({
            msg:'ejemplo no encontrado'

        })

       }
      return res.status(200).json({
        ejemplo
       })
       

        
    } catch (error) {
       return res.status(500).json({
            error: 'error al buscar el id'
        })

        
        
    }
}



postEjemplo = async(req, res)=>{
    const body = req.body;
    const ejemplo = new Ejemplo(body)
    try {

        const validaError = ejemplo.validateSync();

        if(validaError){
            const errorMensaje = Object.values(validaError.errors).map(errors => errors.message);
            
            return res.status(400).json({
                error: errorMensaje

            })
        }
        
        await ejemplo.save();
       return res.status(200).json({
            ejemplo
        })

        
    } catch (error) {

       return res.status(500).json({
            error: 'error al guardar ejemplo'
        })
        
    }
}



updateEjemplo = async (req, res) => {
    console.log('actualizar ejemplo');
    const id = req.params.id;

    try {
        // Verifica si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        // Actualiza el documento con los datos enviados en el cuerpo de la solicitud
        const ejemploActualizado = await Ejemplo.findByIdAndUpdate(id, req.body, {
            new: true, // Retorna el documento actualizado
            runValidators: true // Ejecuta las validaciones definidas en el schema
        });

        if (!ejemploActualizado) {
            return res.status(404).json({
                msg: 'Ejemplo no encontrado'
            });
        }

        // Devuelve el documento actualizado
        return res.status(200).json({
            msg: 'Ejemplo actualizado',
            ejemplo: ejemploActualizado
        });

    } catch (error) {
        // Manejo de errores
        return res.status(500).json({
            error: 'Error al actualizar el ejemplo'
        });
    }
};






deleteEjemplo = async (req, res) => {
    console.log('eliminar ejemplo');
    const id = req.params.id;

    try {
        // Verifica si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        // Elimina el documento por ID
        const ejemploEliminado = await Ejemplo.findByIdAndDelete(id);

        if (!ejemploEliminado) {
            return res.status(404).json({
                msg: 'Ejemplo no encontrado'
            });
        }

        // Devuelve una respuesta de éxito
        return res.status(200).json({
            msg: 'Ejemplo eliminado'
        });

    } catch (error) {
        // Manejo de errores
        return res.status(500).json({
            error: 'Error al eliminar el ejemplo'
        });
    }
};



} //fin classs
