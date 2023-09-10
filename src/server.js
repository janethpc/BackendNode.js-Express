import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.js';
import routerUser from './routes/user.js';
import categoryRout from './routes/category.js';
import routerProduct from './routes/product.js';




//cargar variable de entonro 
config()

const server = express(); 
const port = process.env.PORT || 3000;

server.use(morgan('dev')); //mostrar un mensaje corto por consola
server.use(cookieParser())

//ROUTE
server.get('/', (req, res) => {
        res.send("welcome to my app")
})

//middlewares setear a json
server.use(express.json())

//url api
server.use('/api', authRouter)
server.use('/api', routerUser );
server.use('/api', categoryRout);
server.use('/api', routerProduct);

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

