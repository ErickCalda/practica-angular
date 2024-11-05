import { Router } from "express"
import { EstudiantesController } from "../controller/estudiantesController.js"

const estudiante = Router()
const Estudiante = new EstudiantesController()

estudiante.post('/', Estudiante.postEstudiante)
estudiante.get('/', Estudiante.getEstudiante)
estudiante.route('/:id')
                    .get(Estudiante.getEstudianteId)
                    .put(Estudiante.updateEstudiante)

                    .delete( Estudiante.deleteEstudiante)






export default estudiante
