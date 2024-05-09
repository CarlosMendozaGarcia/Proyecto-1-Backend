const mongoose = require("mongoose");

const schemaPedido = new mongoose.Schema({
    
  }, {
    versionKey: false,
    timestamps: true
});
  
const Model = mongoose.model('Pedido', schemaPedido);

module.exports = Model;