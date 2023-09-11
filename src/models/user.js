import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema({ //que va a guardar
    name:{
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    role:{
        type: String
    }
},{
    timestamps: true
}); 

//crear y exportar el modelo de usuario 
const User = mongoose.model('user', userSchema); //interactuar con los metodos

export default User