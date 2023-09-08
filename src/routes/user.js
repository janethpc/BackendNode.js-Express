import { Router } from 'express'; 
import userSchema from '../models/user.js';

const router = Router();


router.post('/users', async (req, res) => {
    try{
        const user = new userSchema(req.body);
        const data = await user.save();
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/users', async (req, res) => {
    try{
        const users = await userSchema.find()
        res.json(users)
    }catch(error){ 
        res.status(500).json({message: error.message})
    }
})

export default router;