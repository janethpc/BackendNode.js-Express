import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number
    }, 
    email: {
        type: String,
        required: true
    }
}); 

//crear y exportar el modelo de usuario 
const User = mongoose.model('user', userSchema);

export default User