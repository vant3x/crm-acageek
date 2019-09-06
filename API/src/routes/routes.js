const { Router } = require('express');
const router = Router();

const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');

// -------***--- Rutas clientes --------***---

// agrgegar nuevos clientes
router.post('/clientes', clienteController.nuevoCliente);

// Obtener todos los clientes
router.get('/clientes', clienteController.mostrarClientes);

// Obtener un cliente en especifico por ID
router.get('/clientes/:idCliente', clienteController.mostrarCliente);

// Actualizar cliente
router.put('/clientes/:idCliente', clienteController.actualizarCliente);

// Eliminar cliente 
router.delete('/clientes/:idCliente', clienteController.eliminarCliente);


// -------***--- Rutas Productos --------***---
// nuevo producto
router.post('/productos', 
    productosController.subirArchivo,
    productosController.nuevoProducto
);

// mostrar productos
router.get('/productos',  productosController.mostrarProductos);

module.exports = router;
