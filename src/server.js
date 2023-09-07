const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()

const server = express(); 
const port = process.env.PORT || 3000;

//ROUTE
server.get('/', (req, res) => {
        res.send("welcome to my app")
})

//coneccion
mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("conectado a mongodb"))
    .catch((error) => console.error(error))

server.listen(port, () => {
    console.log(`server listing on port ${port}`)
});