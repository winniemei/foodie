const express = require('express');
const router = express.Router();

const { getAllRecipes, getRecipeById, addRecipe } = require('../db/helpers/recipes');

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
        const newRecipe = await addRecipe(req.body);
        console.log(req.body)
        res.send(newRecipe);
    }
    catch (error) {
        next(error);
    }
});

module.exports = router;