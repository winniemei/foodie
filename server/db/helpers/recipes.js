const client = require('../client');

const createRecipe = async({ title, cookingTime, is_vegetarian, description, video, userId }) => {
    try {
        const {
            rows: [recipe]
        } = await client.query(
        `
        INSERT INTO recipes(title, cookingTime, is_vegetarian, description, video, userId)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,
        [title, cookingTime, is_vegetarian, description, video, userId]
        );
        return recipe;
    } catch (error) {
        throw error
    }
}

module.exports = { createRecipe }