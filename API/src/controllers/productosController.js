const Productos = require('../models/Productos');

 // subida de imagen producto al servidor
const multer = require('multer');
const shortid = require('shortid');

const configMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'))
        }
    }
}

// pasar la configuracion y el campo
const upload = multer(configMulter).single('imagen');

// sube un archivo
exports.subirArchivo = (req, res, next) => {
    upload(req, res, function(error) {
        if (error) {
            res.json({mensaje: error});
        }
        return next();
    });
}

// agrega nuevos productos
exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);

    try {
        console.log(req.body);
        // verificar  si hay archivo
        if (req.file.filename) {
            producto.imagen = req.file.filename
        }
        await producto.save();
        res.json({mensaje: 'Se agregó un nuevo producto'}); 
    } catch (error) {
        console.log(error);
        next();
    }
}

// mostrar todos los productos
exports.mostrarProductos = async (req, res, next) => {
    try {
        const productos = await Productos.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}