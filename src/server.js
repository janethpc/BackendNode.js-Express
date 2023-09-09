import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import router from './routes/user.js';

//cargar variable de entonro 
config()

const server = express(); 
const port = process.env.PORT || 3000;

//ROUTE
server.get('/', (req, res) => {
        res.send("welcome to my app")
})

//middlewares setear a json
server.use(express.json())

//url api
server.use('/api', router )

//coneccion
mongoose
    .connect(process.env.MONGODB, {useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(() => {
        console.log("Connect to Mongodb")

        //inicializar servidor
        server.listen(port, () => {
            console.log(`server listing on port ${port}`)
        }); 
})
    .catch((error) => {
        console.error('error connected to mongodb', error)
    })
