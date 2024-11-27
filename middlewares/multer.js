import multer from 'multer';
import path from 'path';

 export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Nombre único para evitar conflictos
    }
});

export const upload = multer({ 
    storage, 
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/; // Tipos de archivo permitidos
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Solo se permiten imágenes en formato JPEG, JPG o PNG'));
        }
    }
});
