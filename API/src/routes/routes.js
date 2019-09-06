const { Router } = require('express');
const router = Router();

const clienteController = require('../controllers/clienteController');

// agrgegar nuevos clientes
router.post('/clientes', clienteController.nuevoCliente);

// Obtener todos los clientes
router.get('/clientes', clienteController.mostrarClientes);

// Obtener un cliente en especifico por ID
router.get('/clientes/:idCliente', clienteController.mostrarCliente);

// Actualizar cliente
router.put('/clientes/:idCliente', clienteController.actualizarCliente);


module.exports = router;