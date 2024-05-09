const mongoose = require("mongoose");

const schemaLibro = new mongoose.Schema({
    titulo:{type:String, required:true},
    autor:{type:String,required:true},
    editorial:{type:String, required:true},
    precio:{type:Number,required:true},
    genero:{type:String},
    fechapubli: {type:String,required:true},
    borrado:{type:Boolean,required:true}
  }, {
    versionKey: false,
    timestamps: true
});
  
const Model = mongoose.model('Libro', schemaLibro);

module.exports = Model;