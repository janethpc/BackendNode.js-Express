import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import Joi from 'joi';
import {Router} from 'express';
import generateAuthToken from '../utils/generateAuthToken.js';

const loginRouter = Router();

loginRouter.post("/login", async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status.send(error.details[0].message);
    
    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword)
    return res.status(400).send('invalid email or password');

    const token = generateAuthToken(user)

    res.send({token, user})

})

export default loginRouter;