const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: 'Clientes'
    },
    productos: [{
        producto: {
            type: Schema.ObjectId,
            ref: 'Productos'
        },
        cantidad: Number
    }]
});

module.exports = mongoose.model('Pedidos', pedidosSchema);