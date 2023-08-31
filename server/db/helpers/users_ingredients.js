const client = require('../client');

const createUsersIngredient = async({ usersId, ingredientsId }) => {
    try {
        const {
            rows: [usersIngredient]
        } = await client.query(
        `
        INSERT INTO usersIngredients(usersId, ingredientsId)
        VALUES ($1, $2)
        RETURNING *;
        `,
        [usersId, ingredientsId]
        );
        return usersIngredient;
    } catch (error) {
        throw error
    }
}

module.exports = { createUsersIngredient }