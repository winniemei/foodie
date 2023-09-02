const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER: /api/users
router.use('/users', require('./users'));

// ROUTER: /api/recipes
router.use('/recipes', require('./recipes'));

// ROUTER: /api/ingredients
router.use('/ingredients', require('./ingredients'));

// ROUTER: /api/recipesIngredients
router.use('/recipesIngredients', require('./recipes_ingredients'));

// ROUTER: /api/recipesIngredients
router.use('/usersIngredients', require('./users_ingredients'));

module.exports = router;