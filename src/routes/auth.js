import { Router } from "express";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { createAccesToken } from "../libs/jwt.js";
import { authrequired } from "../middleware/validateToken.js";



const authRouter = Router();


//registrar usuario
authRouter.post('/register', async (req, res) => {
    const {name, age, email, password} = req.body;
    
    try{
        
        const hash = await bcrypt.hash(password, 10) //encripta la contraseña

        const newUser = new User({
            name,
            age,
            email,
            password: hash
        });

        const userSaved = await newUser.save();
        const token = await createAccesToken({id: userSaved._id});

        res.cookie('token', token)
        res.json({
            id: userSaved.id,
            name: userSaved.name,
            email: userSaved.email
        })
    } catch(error){
        res.status(500).json({message: error.message})
    }
});


//iniciar sesion
authRouter.post('/login', async (req, res) => {
    const { email, password, rol} = req.body;
    
    try{
        
        const userFound = await User.findOne({email});
        if(!userFound){
            return res.status(404).json({message: 'user not found'})
        }

        const isMatch = await bcrypt.compare(password, userFound.password) //encripta la contraseña
            if(!isMatch){
                return res.status(400).json({message: 'Incorrect Password'})
            }
        
        const token = await createAccesToken({id: userFound._id, name: userFound.name});

        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
          });

         res.json({
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            rol: rol ? userFound.rol : null
        })
    } catch(error){
        res.status(500).json({message: error.message})
    }
});

//cerrar sesion 
authRouter.post('/logout',  (req, res) => {
    res.cookie('token', "",{
        expires: new Date(0)
    })
    return res.sendStatus(200); 
})

//perfil 
authRouter.get('/profile' , async (req, res) => {
    try{
        const user = await User.findById(req.user.id); 
        if(!user) return res.status(404).json({message: 'user not found'})

        return res.json({
            id: user._id,
            name: user.name,
            rol: rol ? user.rol : null  
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default authRouter;