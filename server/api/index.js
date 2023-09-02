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

module.exports = router;