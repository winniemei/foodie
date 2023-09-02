const express = require('express');
const router = express.Router();

const { getAllRecipes, getRecipeById } = require('../db/helpers/recipes');

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



module.exports = router;