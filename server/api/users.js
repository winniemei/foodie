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

module.exports = router;