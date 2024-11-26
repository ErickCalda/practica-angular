import productoRouter from "./productoRoutes.js";// Asegúrate de que el archivo esté correctamente nombrado

import { Router } from "express";

const indexRoutes = Router();

// Ruta principal para productos
indexRoutes.use('/productos', productoRouter);

export default indexRoutes;
