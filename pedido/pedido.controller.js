const { throwCustomError } = require("../Authentication/Authentication");
const { createPedidoMongo, getPedidoMongo, updatePedidoMongo, deletePedidoMongo } = require("./pedido.actions");

async function readPedidoConFiltros(query) {
    const {fecha_min, fecha_max, estado} = query;

    // hacer llamado a base de datos con el filtro de tipo
    const resultadosBusqueda = await getPedidoMongo(query);

    return resultadosBusqueda;
}

async function createPedido(datos) {
    const { comprador, vendedor, estado, fecha, borrado, ...items} = datos;


    const PedidoSimilar = await getPedidoMongo({titulo});

    // hacer llamado a base de datos con el filtro de tipo
    const PedidoCreado = await createPedidoMongo(datos);

    return PedidoCreado;
}


function updatePedido(datos) {
    const { _id, ...cambios } = datos;

    // hacer llamado a base de datos con el filtro de tipo
    const PedidoCreado = updatePedidoMongo(_id, cambios);

    return PedidoCreado;
}

function deletePedido(id) {

    // hacer llamado a base de datos con el filtro de tipo
    const PedidoCreado = deletePedidoMongo(id);

    return PedidoCreado;
}

module.exports = {
    readPedidoConFiltros,
    createPedido,
    updatePedido,
    deletePedido
}