const mongoose = require("mongoose");

const schemaUsuario = new mongoose.Schema({
    nombre:{type: String, required:true},
    usuario:{type:String, required: true, unique: [true, "Este usuario ya esta en uso"]},
    contraseña:{type:String, required: true},
    borrado: {type:Boolean, default:false}
  }, {
    versionKey: false,
    timestamps: true
});
  
const Model = mongoose.model('Usuario', schemaUsuario);