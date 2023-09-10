import { Router } from 'express';
import productsModel from '../models/product.js';
import categoryModels from '../models/category.js';
import { productSchema } from '../schemas/product.schema.js';
import { validateSchema } from '../middleware/validator.middleware.js';

const routerProduct = Router();

//crear un producto 
routerProduct.post('/products', validateSchema(productSchema), async (req, res) => {
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
routerProduct.get('/products', async (req, res) => {
    try {
        const products = await productsModel.find();
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'Products not found' });
        }
        // Mapear los productos para reemplazar _id con el nombre de la categoría
        const productsWithCategoryNames = await Promise.all(products.map(async (product) => {
            const category = await categoryModels.findById(product.category);
            if (category) {
                return {
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    category: category.name, // Usar el nombre de la categoría
                    createdAt: product.createdAt,
                    __v: product.__v,
                };
            } else {
                return product;
            }
        }));
        res.json(productsWithCategoryNames);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//leer un solo producto
routerProduct.get('/products/:name', async (req, res) => {
    try {
        const { name } = req.params;
        
        // Buscar productos por nombre
        const products = await productsModel.find({ name: name });

        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'Products not found with this name' });
        }

        // Mapear los productos para reemplazar el id de la categoría con su nombre
        const productsWithCategoryNames = await Promise.all(products.map(async (product) => {
            const category = await categoryModels.findById(product.category);
            return {
                _id: product._id,
                name: product.name,
                price: product.price,
                description: product.description,
                category: category ? category.name : null, // Usar el nombre de la categoría si existe
                createdAt: product.createdAt,
                __v: product.__v,
            };
        }));
        res.json(productsWithCategoryNames);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//editar un producto 
routerProduct.put('/products/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const { newname, price, description, category } = req.body;

        // Buscar o crear la categoría
        let trueCategory;
        if (category) {
            trueCategory = await categoryModels.findOneAndUpdate(
                { name: category },
                {},
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
        }

        // Buscar el producto por nombre
        const existingProduct = await productsModel.findOne({ name });
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Actualizar los campos del producto con los nuevos valores
        existingProduct.name = newname;
        existingProduct.price = price;
        existingProduct.description = description;

        // Si se proporcionó una nueva categoría, asignar su _id al producto
        if (trueCategory) {
            existingProduct.category = trueCategory._id;
        }

        // Guardar el producto actualizado
        const updatedProduct = await existingProduct.save();

        // Crear una respuesta con el producto actualizado y el nombre de la categoría
        const response = {
            _id: updatedProduct._id,
            name: updatedProduct.name,
            price: updatedProduct.price,
            description: updatedProduct.description,
            category: trueCategory ? trueCategory.name : category, // Usar el nuevo nombre de la categoría o el antiguo si no se actualizó
            createdAt: updatedProduct.createdAt,
            __v: updatedProduct.__v,
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//eliminar un producot 
routerProduct.delete('/products/:name', async (req, res) => {
    try {
        const { name } = req.params;
        // Buscar el producto por nombre y eliminarlo
        const deletedProduct = await productsModel.findOneAndDelete({ name });
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default routerProduct;

