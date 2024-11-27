import { Router } from "express";
import { Controller } from "../controller/producto.js";
import multer from 'multer'; // Asegúrate de que este sea el archivo correcto
import { upload } from "../middlewares/multer.js";
const productoRouter = Router();


const controller = new Controller();

// GET en la raíz - Obtener todos los productos
productoRouter.get('/', controller.getProductos);

// GET con parámetro de ID - Obtener producto por ID

// PUT - Actualizar producto por ID
productoRouter.put('/:id', controller.updateProducto);

productoRouter.post('/', upload.single('imagen'), controller.postProducto); // Usar upload.single('imagen')


// DELETE con parámetro de ID - Eliminar producto por ID
productoRouter.delete('/:id', controller.deleteProducto);
productoRouter.get('/buscar', controller.buscarProductos);

export default productoRouter;
