const client = require('../client');

const createUser = async ({ username, password }) => {
  try {
    const {
      rows: [user]
    } = await client.query(
      `
        INSERT INTO users(username, password)
        VALUES ($1, $2)
        RETURNING *;
        `,
      [username, password]
    );
    return user;
  } catch (error) {
    throw error
  }
}

// GET - /api/users - get all users
async function getAllUsers() {
  try {
    const { rows } = await client.query(`
        SELECT * FROM users;
        `)
    return rows;
  } catch (error) {
    throw error;
  }
}

// GET - /api/users/:id - get user by id
async function getUserById(id) {
  try {
    const { rows: [user] } = await client.query(`
        SELECT * FROM users
        WHERE users_id = ${id}
      `);
    return user;
  } catch (error) {
    throw error;
  }
}

// POST - /api/users - create a new user
async function addUser({username, password}) {
  try {
    const {rows: [user]} = await client.query(`
        INSERT INTO users ("username", "password")
        VALUES($1, $2)
        RETURNING *;
    `, [username, password]);
    return user;
  } catch (error) {
    throw error;
  }
}

// PUT - /api/users/:id - update a user
async function updateUser(id, body) {
  try {
    const { rows } = await client.query(
    `
    UPDATE users
    SET username = '${body.username}', password = '${body.password}' 
    WHERE users_id = ${id}
    RETURNING *;
    `
    );
    console.log("updated user", rows);
    return rows;
    }
     catch (error) {
      throw error;
  }
}

// DELETE - /api/users/:id - delete a user
async function deleteUser(id) {
  try {
    console.log('entering delete..')
    const { rows } = await client.query(
    `
    DELETE FROM users
    WHERE users_id = ${id}
    `
    );
    console.log("deleted user", rows);
    return rows;
    }
     catch (error) {
      throw error;
  }
}

module.exports = { createUser, getAllUsers, getUserById, updateUser, addUser, deleteUser }