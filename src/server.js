import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
//import authRouter from './routes/auth.js';
import routerUser from './routes/user.js';
import categoryRout from './routes/category.js';
import routerProduct from './routes/product.js';
import cors from 'cors';
import stripeRouter from './routes/stripe.js';
import registerAuth from './routes/register.js';
import loginRouter from './routes/login.js';

stripeRouter


//cargar variable de entonro 
config()

const server = express(); 
const port = process.env.PORT || 3000;



const corsOptions = {
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
    credentials: true, // Habilita las cookies
  };
  
server.use(cors(corsOptions)); //permitir que todos los dominios se puedan comunicar en este servidor 
server.use(morgan('dev')); //mostrar un mensaje corto por consola
server.use(cookieParser())
//middlewares setear a json
server.use(express.json())

//ROUTE
server.get('/', (req, res) => {
        res.send("welcome to my app")
})



//url api
//server.use('/api', authRouter);
server.use('/api', registerAuth);
server.use('/api', loginRouter);
server.use('/api', routerUser );
server.use('/api', categoryRout);
server.use('/api', routerProduct);
server.use('/api', stripeRouter);

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

