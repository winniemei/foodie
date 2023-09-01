const client = require('../client');

const createUser = async({ username, password }) => {
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
        const { users } = await client.query(`
        SELECT * FROM users;
        `)
        return users;
    } catch(error) {
        throw error;
    }
}

// GET - /api/users/:id - get user by id
async function getUserById({id}) {
    try {
      const { rows } = await client.query(`
        SELECT * FROM users
        WHERE "users_id" = ${id}
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }



module.exports = { createUser, getAllUsers, getUserById }