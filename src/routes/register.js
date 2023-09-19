import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import Joi from "joi";
import { Router } from 'express';
import generateAuthToken from '../utils/generateAuthToken.js';


const registerAuth = Router();

registerAuth.post("/register", async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already exists...');

    const {name, email, age, password} = req.body;

    user = new User({name, email, age, password});

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = generateAuthToken(user);

    res.send({token, user});

})

export default registerAuth;