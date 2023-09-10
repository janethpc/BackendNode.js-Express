import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    "name":{
        type: String,
        required: true,
    },
    "description":{
        type: String,
        required: true,
    },
    "price": {
        type: Number,
        required: true
    },
    "category": {
        type: mongoose.Schema.Types.ObjectId, // relacione con el esquema 
        ref: 'category',
        requerid: true
    },
    "createdAt":{
        type: Date,
        default: Date.now
    }
});

const productModel = mongoose.model('product', productSchema);

export default productModel;