const mongoose = require("mongoose")

const schemaLibro = new mongoose.Schema({
    titulo:{type:String, required:true},
    autor:{type:String,required:true},
    editorial:{type:String, required:true},
    precio:{type:Number,required:true},
    genero:{type:String},
    fecha_publicacion: {type:String,required:true},
    borrado:{type:Boolean,default:false}
  }, {
    versionKey: false,
    timestamps: true
})
  
const Model = mongoose.model('Libro', schemaLibro)

module.exports = Model