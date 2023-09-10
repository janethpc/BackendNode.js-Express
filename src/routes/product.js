import { Router } from 'express';
import productsModel from '../models/product.js';
import categoryModels from '../models/category.js';

const routerProduct = Router();

//crear un producto 
routerProduct.post('/products', async (req, res) => {
    try {
        const { name, price, description, category } = req.body;
        //buscar categoria por nombre 
        let trueCategory = await categoryModels.findOne({ name: category });
        if (!trueCategory) {
            trueCategory = new categoryModels({ name: category })
            await trueCategory.save()
        }

        // crear un nuevo producto y asociarlo a una categoria 
        const product = new productsModel({
            name,
            price,
            description,
            category: trueCategory._id
        });

        const data = await product.save();

        //obtener nombre de la categoria
        const nameCategory = trueCategory.name;

        //crear producto con nombre de categoria 
        const response = {
            _id: data._id,
            name: data.name,
            price: data.price,
            description: data.description,
            category: nameCategory,
            createdAt: data.createdAt,
            __v: data.__v,
        }
        res.json(response)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//leer todos los productos 
/*routerProduct.post('/products', async (req, res) => {
    try{

    }catch (error) {
        res.status(500).json({message: error.message})
    }
});
//ller un solo producto
routerProduct.post('/products', async (req, res) => {
    try{

    }catch (error) {
        res.status(500).json({message: error.message})
    }
});
//editar un producto 
routerProduct.post('/products', async (req, res) => {
    try{

    }catch (error) {
        res.status(500).json({message: error.message})
    }
});
//eliminar un producot 
routerProduct.post('/products', async (req, res) => {
    try{

    }catch (error) {
        res.status(500).json({message: error.message})
    }
}); */

export default routerProduct;