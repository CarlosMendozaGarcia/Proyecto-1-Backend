const express = require ('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>{
    res.status(200).json({});
})

const rutaslibro = require("./libro/libro.route")
app.use('/libro', rutaslibro);

mongoose.connect("mongodb+srv://mendozagarcia:WH2m5kTSKdzoFMl6@clusterbackend.jqy3wbh.mongodb.net/"
).then(() => console.log("Database connection succesful")).catch(() => console.log("Database connection error"));

app.listen(8080)