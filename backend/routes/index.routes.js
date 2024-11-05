import ejemplo from "./ejemploroutes.js";

import estudiante from "./estudiantes.js";

import { Router } from "express";


const indexRoutes = Router();

indexRoutes.use('/ejemplo',ejemplo)

indexRoutes.use('/estudiante',estudiante)

export default indexRoutes