const express = require('express');
const router = express.Router();

const { getAllUsers, getUserById, updateUser, addUser, deleteUser } = require('../db/helpers/users');

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

// POST - /api/users - create a new user
router.post('/', async (req, res, next) => {
    try {
        const newUser = await addUser(req.body);
        console.log(req.body)
        res.send(newUser);
    }
    catch (error) {
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

// DELETE - /api/users - delete a user
router.delete('/:id', async (req, res, next) => {
    try {
        const user = await deleteUser(req.params.id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;