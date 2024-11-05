import { Console, error } from "console";
import Estudiante from "../module/estudiantesmudul.js";
import mongoose from "mongoose";


export class EstudiantesController{





    getEstudiante = async (req,res)=>{
        console.log('obtine todos los Estudiante')
    
        try {
         const ejemplos =   await Estudiante.find({},{__v:0});
    
            if(ejemplos.length===0){
    
                return res.status(400).json({
                        msg:'No se encontraron Estudiante'
                    })
            }
            res.status(200).json(ejemplos);
    
            
         
        } catch (error) {
           return res.status(500).json({
                msg:'error al octener Estudiante'
            })
    
            }
            
        
    }
    
    
     getEstudianteId = async (req, res) =>{
    
        console.log('busqueda por id')
        const id = req.params.id;
        try {
           if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg:'id no valido'
            })
    
           }
    
           const estudiante = await Estudiante.findById(id)
           if(!estudiante){
            return res.status(404).json({
                msg:'Estudiante no encontrado'
    
            })
    
           }
          return res.status(200).json({
            estudiante
           })
           
        
            
        } catch (error) {

            console.log(error)
           return res.status(500).json({
                error: 'error al buscar el id'
            })
    
            
            
        }
    }
    
    
    
    postEstudiante = async(req, res)=>{
        const body = req.body;
        const estudiante = new Estudiante(body)
        try {
    
            const validaError = estudiante.validateSync();
    
            if(validaError){
                const errorMensaje = Object.values(validaError.errors).map(errors => errors.message);
                
                return res.status(400).json({
                    error: errorMensaje
    
                })
            }
            
            await estudiante.save();
           return res.status(200).json({
                estudiante
            })
    
            
        } catch (error) {

            console.log(error)
    
           return res.status(500).json({
                error: 'error al guardar Estudiante'
            })
            
        }
    }
    
    
    
    updateEstudiante = async (req, res) => {
        console.log('actualizarEstudiante');
        const id = req.params.id;
    
        try {
            // Verifica si el ID es válido
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    msg: 'ID no válido'
                });
            }
    
            // Actualiza el documento con los datos enviados en el cuerpo de la solicitud
            const EstudianteActualizado = await Estudiante.findByIdAndUpdate(id, req.body, {
                new: true, // Retorna el documento actualizado
                runValidators: true // Ejecuta las validaciones definidas en el schema
            });
    
            if (!EstudianteActualizado) {
                return res.status(404).json({
                    msg: 'Estudiante no encontrado'
                });
            }
    
            // Devuelve el documento actualizado
            return res.status(200).json({
                msg: 'Estudiante actualizado',
                EstudianteActualizado: EstudianteActualizado
            });
    
        } catch (error) {
            // Manejo de errores
            return res.status(500).json({
                error: 'Error al actualizar el Estudiante'
            });
        }
    };
    
    
    
    
    
    
    deleteEstudiante = async (req, res) => {
        console.log('eliminar v');
        const id = req.params.id;
    
        try {
            // Verifica si el ID es válido
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    msg: 'ID no válido'
                });
            }
    
            // Elimina el documento por ID
            const EstudianteEliminado = await Estudiante.findByIdAndDelete(id);
    
            if (!EstudianteEliminado) {
                return res.status(404).json({
                    msg: 'Estudiante no encontrado'
                });
            }
    
            // Devuelve una respuesta de éxito
            return res.status(200).json({
                msg: 'Estudiante eliminado'
            });
    
        } catch (error) {
            // Manejo de errores
            return res.status(500).json({
                error: 'Error al eliminar el Estudiante'
            });
        }
    };
}