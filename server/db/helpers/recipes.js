const client = require('../client');

const createRecipe = async({ title, portions, cookingTime, is_vegetarian, description, video, userId }) => {
    try {
        const {
            rows: [recipe]
        } = await client.query(
        `
        INSERT INTO recipes(title, portions, cookingTime, is_vegetarian, description, video, userId)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
        `,
        [title, portions, cookingTime, is_vegetarian, description, video, userId]
        );
        return recipe;
    } catch (error) {
        throw error
    }
}

// GET - /api/recipes - get all recipes
async function getAllRecipes() {
    try {
        const { rows } = await client.query(`
        SELECT * FROM recipes;
        `)
        return rows;
    } catch (error) {
        throw error;
    }
}


// GET - /api/recipes/:id - get recipe by id
async function getRecipeById(id) {
    try {
        const { rows: [recipe] } = await client.query(`
        SELECT * FROM recipes
        WHERE recipes_id = ${id}`
        );
        return recipe;
    } catch (error) {
        throw error;
    }
}

// POST - /api/recipes - create a new recipe
async function addRecipe({ title, portions, cookingTime, is_vegetarian, description, video, userId }) {
    try {
      const {rows: [recipe]} = await client.query(
        `
        INSERT INTO recipes(title, portions, cookingTime, is_vegetarian, description, video, userId)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
        `,
        [title, portions, cookingTime, is_vegetarian, description, video, userId]
        );
      return recipe;
    } catch (error) {
      throw error;
    }
  }
  
  // PUT - /api/users/:id - update a user
//   async function updateUser(id, body) {
//     try {
//       const { rows: [user] } = await client.query(
//       `
//       UPDATE users
//       SET username = '${body.username}', password = '${body.password}' 
//       WHERE users_id = ${id}
//       RETURNING *;
//       `
//       );
//       console.log("updated user", user);
//       return user;
//       }
//        catch (error) {
//         throw error;
//     }
//   }
  
  // DELETE - /api/users/:id - delete a user
//   async function deleteUser(id) {
//     try {
//       console.log('entering delete..')
//       const { rows: [user] } = await client.query(
//       `
//       DELETE FROM users
//       WHERE users_id = ${id}
//       `
//       );
//       console.log("deleted user", user);
//       return user;
//       }
//        catch (error) {
//         throw error;
//     }
//   }

module.exports = { createRecipe, getAllRecipes, getRecipeById, addRecipe }