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
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type: String
    }
},{
    timestamps: true
}); 

//crear y exportar el modelo de usuario 
const User = mongoose.model('user', userSchema); //interactuar con los metodos

export default User