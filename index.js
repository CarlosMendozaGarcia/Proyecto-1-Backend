const express = require ('express')
const cors = require('cors')
const mongoose = require('mongoose')
const url = process.env.DB_URL
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res) =>{
    res.status(200).json({})
})

const rutaslibro = require("./libro/libro.route")

const rutaspedido = require("./pedido/pedido.route")

//const rutasusuario = require("./usuario/usuario.route")


app.use('/libro', rutaslibro)

app.use('/pedido', rutaspedido)

//app.use('/usuario', rutasusuario)

mongoose.connect(url).then(() => {
    console.log("Database connection succesful")
    app.listen(8080)
}
).catch(() => {
    console.log("Database connection error")
}
)

