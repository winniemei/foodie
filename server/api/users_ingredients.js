const express = require('express');
const router = express.Router();

const { getAllUsersIngredients } = require('../db/helpers/users_ingredients');

// GET - /api/users_ingredients - get all users_ingredients
router.get('/', async(req, res, next) => {
    try { 
        console.log('getting all users_ingredients')
        const usersIngredients = await getAllUsersIngredients();
        res.send(usersIngredients);
    } catch (error) {
        next(error);
    }
});

module.exports = router;