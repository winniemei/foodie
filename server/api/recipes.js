const express = require('express');
const router = express.Router();

const { getAllRecipes } = require('../db/helpers/recipes');

// GET - /api/recipes - get all recipes
router.get('/', async(req, res, next) => {
    try { 
        console.log('getting')
        const recipes = await getAllRecipes();
        res.send(recipes);
    } catch (error) {
        next(error);
    }
})

module.exports = router;