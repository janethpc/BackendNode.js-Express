import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    "name":{
        type: String,
        required: true,
        unique: true
    },
    "description":{
        type: String,
        
    },
    "createdAt":{
        type: Date,
        default: Date.now
    }
});

const categoryModels = mongoose.model('category', categorySchema);

export default categoryModels;