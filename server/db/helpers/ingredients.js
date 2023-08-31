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

module.exports = { createIngredient }