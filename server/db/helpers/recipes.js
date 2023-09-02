const client = require('../client');

const createRecipe = async ({ title, portions, cookingTime, is_vegetarian, description, video, userId }) => {
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
        const { rows: [recipe] } = await client.query(
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

// PUT - /api/recipes/:id - update a recipe
async function updateRecipe(id, body) {
    try {
        const { rows: [recipe] } = await client.query(
            `
      UPDATE recipes
      SET title = $1, portions = $2, cookingTime = $3, is_vegetarian = $4, description = $5, video = $6, userId = $7
      WHERE recipes_id = ${id}
      RETURNING *;
      `,
            [body.title, body.portions, body.cookingTime, body.is_vegatrian, body.description, body.video, body.userId]
        );
        console.log("updated recipe", recipe);
        return recipe;
    }
    catch (error) {
        throw error;
    }
}

// DELETE - /api/recipes/:id - delete a recipe
  async function deleteRecipe(id) {
    try {
      console.log('entering delete..')
      const { rows: [recipe] } = await client.query(
      `
      DELETE FROM recipes
      WHERE recipes_id = ${id}
      `
      );
      console.log("deleted recipe", recipe);
      return recipe;
      }
       catch (error) {
        throw error;
    }
  }

module.exports = { createRecipe, getAllRecipes, getRecipeById, addRecipe, updateRecipe, deleteRecipe }