const client = require('../client');

const createRecipesIngredient = async({ recipesId, ingredientsId }) => {
    try {
        const {
            rows: [recipesIngredient]
        } = await client.query(
        `
        INSERT INTO recipesIngredients(recipesId, ingredientsId)
        VALUES ($1, $2)
        RETURNING *;
        `,
        [recipesId, ingredientsId]
        );
        return recipesIngredient;
    } catch (error) {
        throw error
    }
}

// GET - /api/recipes_ingredients - get all recipes_ingredients
async function getAllRecipesIngredients() {
    try {
        const { rows } = await client.query(`
        SELECT * FROM recipesIngredients;
        `)
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { createRecipesIngredient, getAllRecipesIngredients }