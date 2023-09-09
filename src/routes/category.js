import { Router } from "express";
import categoryModels from "../models/category.js";

const categoryRout = Router();

// crear una categoria 
categoryRout.post('/category', async (req, res) => {
    try{
        const newCategory = new categoryModels(req.body);
        const data = await newCategory.save();

        if(!data){
            return res.status(404).json({message: 'Not found'})
        } res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//leer todas las categorias 
categoryRout.get('/category', async (req, res) => {
    try{
        const allCategories = await categoryModels.find();

        if(!allCategories){
            return res.status(404).json({message: 'Not found'})
        } res.json(allCategories)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// leer una categoria por el nombre 
categoryRout.get('/category/:name', async (req, res) => {
    try{
        const {name} = req.params;
        const category = await categoryModels.findOne({name})

        if(!category){
            return res.status(404).json({message: 'Not found'})
        } res.json(category)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// editar la categoria 
categoryRout.put('/category/:name', async (req, res) => {
    try{
        const {name} = req.params;
        const {newname, description} = req.body;

        const editCategory = await categoryModels.findOneAndUpdate({name}, {name: newname, description}, {new: true});


        if(!editCategory){
            return res.status(404).json({message: 'Not found'})
        } res.json(editCategory)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// eliminar la categoria 
categoryRout.delete('/category/:name', async (req, res) => {
    try{
       const {name} = req.params;
       const deleteCategory = await categoryModels.findOneAndDelete({name}); 

        if(!deleteCategory){
            return res.status(404).json({message: 'Not found'})
        } res.json({message: 'deleted category', deleteCategory})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


export default categoryRout; 