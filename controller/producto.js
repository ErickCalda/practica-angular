import Producto from "../module/producto.module.js";
import mongoose from "mongoose";

export class Controller {

    // Obtener todos los productos
    getProductos = async (req, res) => {
        console.log('Obtiene todos los productos');
        try {
            const productos = await Producto.find({}, { __v: 0 });

            if (productos.length === 0) {
                return res.status(400).json({
                    msg: 'No se encontraron productos'
                });
            }
            res.status(200).json(productos);

        } catch (error) {
            return res.status(500).json({
                msg: 'Error al obtener productos'
            });
        }
    }

    // Obtener producto por ID
    getProductoByID = async (req, res) => {
        console.log('Búsqueda de producto por ID');
        const id = req.params.id;

        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    msg: 'ID no válido'
                });
            }

            const producto = await Producto.findById(id);
            if (!producto) {
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                });
            }

            return res.status(200).json({
                producto
            });

        } catch (error) {
            return res.status(500).json({
                error: 'Error al buscar el producto por ID'
            });
        }
    }

    // Crear un nuevo producto
    postProducto = async (req, res) => {
        const body = req.body;
        const producto = new Producto(body);

        try {
            const validaError = producto.validateSync();

            if (validaError) {
                const errorMensaje = Object.values(validaError.errors).map(errors => errors.message);

                return res.status(400).json({
                    error: errorMensaje
                });
            }

            await producto.save();
            return res.status(200).json({
                producto
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error: 'Error al guardar el producto'
            });
        }
    }

    // Actualizar producto por ID
    updateProducto = async (req, res) => {
        console.log('Actualizar producto');
        const id = req.params.id;

        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    msg: 'ID no válido'
                });
            }

            const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            });

            if (!productoActualizado) {
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                });
            }

            return res.status(200).json({
                msg: 'Producto actualizado',
                producto: productoActualizado
            });

        } catch (error) {
            return res.status(500).json({
                error: 'Error al actualizar el producto'
            });
        }
    }

    // Eliminar producto por ID
    deleteProducto = async (req, res) => {
        console.log('Eliminar producto');
        const id = req.params.id;

        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    msg: 'ID no válido'
                });
            }

            const productoEliminado = await Producto.findByIdAndDelete(id);

            if (!productoEliminado) {
                return res.status(404).json({
                    msg: 'Producto no encontrado'
                });
            }

            return res.status(200).json({
                msg: 'Producto eliminado'
            });

        } catch (error) {
            return res.status(500).json({
                error: 'Error al eliminar el producto'
            });
        }
    }

} // Fin de la clase
