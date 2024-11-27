import mongoose from "mongoose";
const productoSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: false },
    stock: { type: Number, required: true, default: 0 },
    fechaIngreso: { type: Date, default: Date.now },
    imagen: { type: String, required: false } // Ruta de la imagen
});


const Producto = mongoose.model('Producto', productoSchema);

export default Producto;
