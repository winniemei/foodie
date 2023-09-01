const express = require('express');
const router = express.Router();

const { getAllUsers, getUserById, updateUser } = require('../db/helpers/users')

// GET - /api/users - get all users
router.get('/', async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.send(users);
    }
    catch (error) {
        next(error);
    }
})

// GET - /api/users/:userId - get user by id
router.get('/:id', async (req, res, next) => {
    try {
        console.log('getting userById...')
        const rows = await getUserById(req.params.id);
        res.send(rows);
    } catch (error) {
        next(error);
    }
});

// PUT - /api/users - update a new user

router.put('/:id', async (req, res, next) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// POST - /api/cats - create a new cat
router.post('/', async (req, res, next) => {
    try {
        const newUser = await updateUser(user);
        if (newUser) {
            res.send(newUser);
        } else {
            next({
                name: 'CreateUserError',
                message: 'There was an error creating the user'
            });
        }
    }
    catch (error) {
    next(error);
}
});



module.exports = router;