const { throwCustomError } = require("../utils/functions")
const { createUsuarioMongo, getUsuarioMongo, updateUsuarioMongo, deleteUsuarioMongo } = require("./usuario.actions")

async function readUsuarioConFiltros(query) {
    const {fecha_min, fecha_max, estado} = query

    // hacer llamado a base de datos con el filtro de tipo
    const resultadosBusqueda = await getUsuarioMongo(query)

    return resultadosBusqueda
}

async function createUsuario(datos) {
    const { comprador, vendedor, estado, fecha, borrado, ...items} = datos


    const UsuarioSimilar = await getUsuarioMongo({titulo})

    // hacer llamado a base de datos con el filtro de tipo
    const UsuarioCreado = await createUsuarioMongo(datos)

    return UsuarioCreado
}


function updateUsuario(datos) {
    const { _id, ...cambios } = datos

    // hacer llamado a base de datos con el filtro de tipo
    const UsuarioCreado = updateUsuarioMongo(_id, cambios)

    return UsuarioCreado
}

function deleteUsuario(id) {

    // hacer llamado a base de datos con el filtro de tipo
    const UsuarioCreado = deleteUsuarioMongo(id)

    return UsuarioCreado
}

module.exports = {
    readUsuarioConFiltros,
    createUsuario,
    updateUsuario,
    deleteUsuario
}