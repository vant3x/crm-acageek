const Productos = require('../models/Productos');

// agrega nuevos productos
exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);

    try {
        console.log(req.body);
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