const express = require('express');
const router = express.Router();

const { getAllIngredients, getIngredientById, addIngredient, updateIngredient, deleteIngredient } = require('../db/helpers/ingredients');

// GET - /api/ingredients - get all ingredients
router.get('/', async(req, res, next) => {
    try { 
        console.log('getting')
        const ingredients = await getAllIngredients();
        res.send(ingredients);
    } catch (error) {
        next(error);
    }
});

// GET - /api/ingredients/:id - get ingredient by id
router.get('/:id', async(req, res, next) => {
    try {
        console.log("getting ingredient by id...")
        const ingredient = await getIngredientById(req.params.id);
        res.send(ingredient);
    } catch (error) {
        next(error);
    }
});

// POST - /api/ingredients - create a new ingredient
router.post('/', async (req, res, next) => {
    try {
        const newIngredient = await addIngredient(req.body);
        console.log(req.body)
        res.send(newIngredient);
    }
    catch (error) {
        next(error);
    }
});

// PUT - /api/ingredients - update a new ingredient
router.put('/:id', async (req, res, next) => {
    try {
        const ingredient = await updateIngredient(req.params.id, req.body);
        res.send(ingredient);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/ingredients - delete an ingredient
router.delete('/:id', async (req, res, next) => {
    try {
        const ingredient = await deleteIngredient(req.params.id);
        res.send(ingredient);
    } catch (error) {
        next(error);
    }
});

module.exports = router;