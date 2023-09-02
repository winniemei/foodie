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

module.exports = { createRecipe, getAllRecipes }