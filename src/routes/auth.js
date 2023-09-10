import { Router } from "express";
import bcrypt from 'bcryptjs';
import User from "../models/user.js";
import { createAccesToken } from "../libs/jwt.js";
import { authrequired } from "../middleware/validateToken.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";




const authRouter = Router();


//registrar usuario
authRouter.post('/register', validateSchema(registerSchema), async (req, res) => {
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

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Solo seguro en producción
            sameSite: "none", // Cambiado a "none" para habilitar cookies de terceros
        })

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
authRouter.post('/login', validateSchema(loginSchema), async (req, res) => {
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
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Solo seguro en producción
            sameSite: "none", // Cambiado a "none" para habilitar cookies de terceros
        });

        res.json({
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            rol: rol ? userFound.rol : null,
        });
    } catch(error){
        res.status(500).json({message: error.message})
    }
});

//cerrar sesion 
authRouter.post('/logout', (req, res) => {
    res.clearCookie('token'); // Cambiado a clearCookie para eliminar la cookie
    return res.sendStatus(200);
});

//perfil 
authRouter.get('/profile' , authrequired, async (req, res) => {
    try{
        const user = await User.findById(req.user.id); 
        if(!user) return res.status(404).json({message: 'user not found'})

        return res.json({
            id: user._id,
            name: user.name,
            rol:  user.rol
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default authRouter;