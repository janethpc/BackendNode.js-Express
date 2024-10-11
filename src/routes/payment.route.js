import {Router} from "express";
import routerProduct from "./product";




const paymentRouter = Router();

routerProduct.get('/create-checkout-session',  (req, res) => 
  res.send('checkout')
)

routerProduct.get('/success', (req, res) => res.send('succes'));

routerProduct.get('/cancel', (req, res) => res.send('cancel'))



export default paymentRouter