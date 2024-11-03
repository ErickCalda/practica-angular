import { Router } from "express";
import {Controller} from "../controller/ejemplo.controller.js";
const ejemplo = Router();

const controller = new Controller();

// GET en la raíz
ejemplo.get('/',controller.getEjemplos )

// GET con parámetro de ID
ejemplo.get('/:id',controller.getEjemploID);

// PUT
ejemplo.put('/:id',controller.updateEjemplo);

// POST
ejemplo.post('/',controller.postEjemplo);

// DELETE con parámetro de ID
ejemplo.delete('/:id',controller.deleteEjemplo);

export default ejemplo;
