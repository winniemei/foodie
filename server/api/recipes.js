const express = require('express');
const router = express.Router();

const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../db/helpers/recipes');

// GET - /api/recipes - get all recipes
router.get('/', async(req, res, next) => {
    try { 
        console.log('getting')
        const recipes = await getAllRecipes();
        res.send(recipes);
    } catch (error) {
        next(error);
    }
});

// GET - /api/recipes/:id - get recipe by id
router.get('/:id', async(req, res, next) => {
    try {
        console.log("getting recipe by id...")
        const recipe = await getRecipeById(req.params.id);
        res.send(recipe);
    } catch (error) {
        next(error);
    }
});

// POST - /api/recipes - create a new recipe
router.post('/', async (req, res, next) => {
    try {
        const newRecipe = await createRecipe(req.body);
        console.log(req.body)
        res.send(newRecipe);
    }
    catch (error) {
        next(error);
    }
});

// PUT - /api/recipes - update a new recipe
router.put('/:id', async (req, res, next) => {
    try {
        const recipe = await updateRecipe(req.params.id, req.body);
        res.send(recipe);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/recipes - delete a recipe
router.delete('/:id', async (req, res, next) => {
    try {
        const recipe = await deleteRecipe(req.params.id);
        res.send(recipe);
    } catch (error) {
        next(error);
    }
});

module.exports = router;