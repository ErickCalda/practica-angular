import { Router } from "express";
import { Controller } from "../controller/producto.js"; // Asegúrate de que este sea el archivo correcto
const productoRouter = Router();

const controller = new Controller();

// GET en la raíz - Obtener todos los productos
productoRouter.get('/', controller.getProductos);

// GET con parámetro de ID - Obtener producto por ID
productoRouter.get('/:id', controller.getProductoByID);

// PUT - Actualizar producto por ID
productoRouter.put('/:id', controller.updateProducto);

// POST - Crear un nuevo producto
productoRouter.post('/', controller.postProducto);

// DELETE con parámetro de ID - Eliminar producto por ID
productoRouter.delete('/:id', controller.deleteProducto);

export default productoRouter;
