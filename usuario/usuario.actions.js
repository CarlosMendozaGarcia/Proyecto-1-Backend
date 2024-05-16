const arg = require("argon2")
const Usuario = require("./usuario.model")

async function getUsuarioMongo(filtros) {
    const UsuariosFiltrados = await Usuario.find(filtros, {"borrado": false})

    return {
        resultados: UsuariosFiltrados,
    }
}

async function createUsuarioMongo(datos) {
    //modificar y agregar hash a contraseña
    contraseña_hashed = await arg.hash(datos.contraseña)
    datos_crypt={
        nombre: datos.nombre,
        usuario: datos.usuario,
        contraseña: contraseña_hashed,
        borrado: datos.borrado
    }
    const UsuarioCreado = await Usuario.create(datos)

    return UsuarioCreado
}

async function updateUsuarioMongo(id, cambios) {
    const resultado = await Usuario.findByIdAndUpdate(id, cambios)

    return resultado
}

async function deleteUsuarioMongo(id) {
    //alterar para soft delete
    const resultado = await Usuario.findByIdAndDelete(id)
    
    return resultado
}

module.exports = {
    createUsuarioMongo,
    getUsuarioMongo,
    updateUsuarioMongo,
    deleteUsuarioMongo
}