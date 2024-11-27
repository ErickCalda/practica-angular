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

    postProducto = async (req, res) => {
        try {
            // Si se sube una imagen, añade su ruta al cuerpo
            if (req.file) {
                req.body.imagen = req.file.path; // Ruta de la imagen subida
            }
    
            const producto = new Producto(req.body);
            const validaError = producto.validateSync();
    
            if (validaError) {
                const errorMensaje = Object.values(validaError.errors).map(errors => errors.message);
                return res.status(400).json({ error: errorMensaje });
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




    // Método para buscar productos por nombre, precio o rango de precios
    buscarProductos = async (req, res) => {
        console.log('Busqueda de productos');

        try {
            // Obtener los parámetros de búsqueda de la query string
            const { nombre, precio, minPrecio, maxPrecio } = req.query;

            // Crear un objeto de filtros para la consulta
            let filtros = {};

            // Si se proporciona un nombre, filtramos por él
            if (nombre) {
                filtros.nombre = { $regex: nombre, $options: 'i' }; // Búsqueda insensible a mayúsculas
            }

            // Si se proporciona un precio exacto, lo filtramos
            if (precio) {
                filtros.precio = precio;
            }

            // Si se proporcionan minPrecio y maxPrecio, filtramos por el rango de precios
            if (minPrecio && maxPrecio) {
                filtros.precio = { $gte: minPrecio, $lte: maxPrecio };
            }

            // Buscar productos en la base de datos según los filtros
            const productos = await Producto.find(filtros, { __v: 0 });

            // Si no se encuentran productos, retornamos un mensaje
            if (productos.length === 0) {
                return res.status(400).json({
                    msg: 'No se encontraron productos que coincidan con la búsqueda'
                });
            }

            // Retornar los productos encontrados
            return res.status(200).json(productos);
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: 'Error al buscar productos',
                error
            });
        }
    };

} 

