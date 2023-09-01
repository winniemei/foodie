const express = require('express');
const router = express.Router();

const { getAllUsers } = require('../db/helpers/users')

// GET - /api/users - get all users
router.get('/users', async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.send(users);
    }
    catch(error) {
        next(error);
    }
})

// GET - /api/users/:userId - get user by id
router.get('/:id', async (req, res, next) => {
    try {
        const rows = await getUserById(req.params.id);
        res.send(rows);
    } catch (error) {
        next(error);
    }
});

module.exports = router;