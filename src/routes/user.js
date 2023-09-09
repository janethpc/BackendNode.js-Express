import { Router } from 'express'; 
import userSchema from '../models/user.js';

const router = Router();

// crear un nuevo usuario
router.post('/users', async (req, res) => {
    try{
        const user = new userSchema(req.body);
        const data = await user.save();
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

// lee todos los usuarios
router.get('/users', async (req, res) => {
    try{
        const users = await userSchema.find()
        res.json(users)
    }catch(error){ 
        res.status(500).json({message: error.message})
    }
}); 

// lee un solo usuario 
router.get('/users/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const user = await userSchema.findById(id);


        if(!user){
            return res.status(500).json({message: 'User not found'})
        }res.json(user)
    }catch(error){ 
        res.status(500).json({message: error.message})
    }
});

// editar usuario 
router.put('/users/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {name, age, email} = req.body;

        const user = await userSchema.findByIdAndUpdate(id, {name, age, email}, {new: true});

        if(!user){
            return res.status(500).json({message: 'User not found'})
        }res.json(user)
    } catch (error){
        res.status(500).json({message: error.message})
    }
});

//elinar usuario 
router.delete('/users/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const user = await userSchema.findByIdAndRemove(id);

        if(!user){
            return res.status(500).json({message: 'User not found'})
        }res.json({message: 'User deleted successfully'})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

export default router;