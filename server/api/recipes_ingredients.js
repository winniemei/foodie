const express = require('express');
const router = express.Router();

const { getAllRecipesIngredients } = require('../db/helpers/recipes_ingredients');

// GET - /api/recipes_ingredients - get all recipes_ingredients
router.get('/', async(req, res, next) => {
    try { 
        console.log('getting all recipes_ingredients')
        const recipesIngredients = await getAllRecipesIngredients();
        res.send(recipesIngredients);
    } catch (error) {
        next(error);
    }
});

module.exports = router;