const mongoose = require("mongoose");

const schemaPedido = new mongoose.Schema({
    comprador:{type:String,required:true},
    vendedor:{type:String,required:true},
    estado:{type:String,default:"en progreso"},
    fecha:{type:String, required:true},
    borrado:{type:Boolean, default: false},
    items:{type:[String],required:true}
  }, {
    versionKey: false,
    timestamps: true
})
  
const Model = mongoose.model('Pedido', schemaPedido)

module.exports = Model