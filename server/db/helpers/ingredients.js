const client = require('../client');

const createIngredient = async({ name, type, image }) => {
    try {
        const {
            rows: [ingredient]
        } = await client.query(
        `
        INSERT INTO ingredients(name, type, image)
        VALUES ($1, $2, $3)
        RETURNING *;
        `,
        [name, type, image]
        );
        return ingredient;
    } catch (error) {
        throw error
    }
}

// GET - /api/ingredients - get all ingredients
async function getAllIngredients() {
    try {
        const { rows } = await client.query(`
        SELECT * FROM ingredients;
        `)
        return rows;
    } catch (error) {
        throw error;
    }
}


// GET - /api/ingredients/:id - get ingredient by id
async function getIngredientById(id) {
    try {
        const { rows: [ingredient] } = await client.query(`
        SELECT * FROM ingredients
        WHERE ingredients_id = ${id}`
        );
        return ingredient;
    } catch (error) {
        throw error;
    }
}

// POST - /api/ingredients - create a new ingredient
async function addIngredient({ name, type, image }) {
    try {
        const { rows: [ingredient] } = await client.query(
            `
        INSERT INTO ingredients(name, type, image)
        VALUES ($1, $2, $3)
        RETURNING *;
        `,
            [name, type, image]
        );
        return ingredient;
    } catch (error) {
        throw error;
    }
}

// PUT - /api/ingredient/:id - update an ingredient
async function updateIngredient(id, body) {
    try {
        const { rows: [ingredient] } = await client.query(
            `
      UPDATE ingredients
      SET name = $1, type = $2, image = $3
      WHERE ingredients_id = ${id}
      RETURNING *;
      `,
            [body.name, body.type, body.image]
        );
        console.log("updated ingredient", ingredient);
        return ingredient;
    }
    catch (error) {
        throw error;
    }
}

// DELETE - /api/ingredients/:id - delete a ingredient
  async function deleteIngredient(id) {
    try {
      console.log('entering delete..')
      const { rows: [ingredient] } = await client.query(
      `
      DELETE FROM ingredients
      WHERE ingredients_id = ${id}
      `
      );
      console.log("deleted ingredient", ingredient);
      return ingredient;
      }
       catch (error) {
        throw error;
    }
  }

module.exports = { createIngredient, getAllIngredients, getIngredientById, addIngredient, updateIngredient, deleteIngredient }

