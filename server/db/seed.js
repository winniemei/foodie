// pulling in connection to my local database
const client = require('./client');

const { createUser } = require('./helpers/users');
const { createRecipe } = require('./helpers/recipes');
const { createIngredient } = require('./helpers/ingredients');
const { createRecipesIngredient } = require('./helpers/recipes_ingredients');
const { createUsersIngredient } = require('./helpers/users_ingredients');

const { recipes, users, ingredients, recipesIngredients, usersIngredients} = require('./seedData');

const dropTables = async() => {
    try {
        console.log("Starting to drop tables");
        await client.query(`
        DROP TABLE IF EXISTS recipes cascade;
        DROP TABLE IF EXISTS users cascade;
        DROP TABLE IF EXISTS ingredients cascade;
        DROP TABLE IF EXISTS recipesIngredients cascade;
        DROP TABLE IF EXISTS usersIngredients cascade;
        `)
    } catch (error) {
        console.log("Error dropping tables");
        throw error;
    }
}

const createTables = async () => {
    console.log("Building tables...") 
    await client.query(`
        CREATE TABLE users (
            users_id SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL
        );
        CREATE TABLE recipes (
            recipes_id SERIAL PRIMARY KEY,
            title varchar(255) UNIQUE NOT NULL,
            portions TEXT [],
            cookingTime INTEGER NOT NULL,
            is_vegetarian BOOLEAN,
            description BYTEA NOT NULL,
            video varchar(255),
            userId INTEGER REFERENCES users(users_id)
        );
        CREATE TABLE ingredients (
            ingredients_id SERIAL PRIMARY KEY,
            name varchar(255) UNIQUE NOT NULL,
            type varchar(255),
            image BYTEA
        );
        CREATE TABLE recipesIngredients (
            recipes_ingredients_id SERIAL PRIMARY KEY,
            recipesId INTEGER REFERENCES recipes(recipes_id) NOT NULL,
            ingredientsId INTEGER REFERENCES ingredients(ingredients_id) NOT NULL
        );
        CREATE TABLE usersIngredients (
            users_ingredients_id SERIAL PRIMARY KEY,
            usersId INTEGER REFERENCES users(users_id) NOT NULL,
            ingredientsId INTEGER REFERENCES ingredients(ingredients_id) NOT NULL
        );
        `)
        console.log('Tables built!');
}

// Insert mock data from seedData.js
// Create users
const createInitialUsers = async() => {
    try {
        for (const user of users) {
            await createUser(user);
        }
        console.log("created user")
    } catch (error) {
        throw error;
    }
    console.log("created users");
    console.log(users);
}

// Create recipes
const createInitialRecipes = async() => {
    try {
        for (const recipe of recipes) {
            await createRecipe(recipe);
        }
        console.log("created recipe")
    } catch (error) {
        throw error;
    }
    console.log("created recipes");
    console.log(recipes);
}

// Create ingredients
const createInitialIngredients = async() => {
    try {
        for (const ingredient of ingredients) {
            await createIngredient(ingredient);
        }
    } catch (error) {
        throw error;
    }
    console.log("created ingredients");
    console.log(ingredients);
}

// Create recipes_ingredients
const createInitialRecipesIngredients = async() => {
    try {
        for (const recipesIngredient of recipesIngredients) {
            await createRecipesIngredient(recipesIngredient);
        }
    } catch (error) {
        throw error;
    }
    console.log("created recipesIngredients table");
    console.log(recipesIngredients);
}

// Create users_ingredients
const createInitialUsersIngredients = async() => {
    try {
        for (const usersIngredient of usersIngredients) {
            await createUsersIngredient(usersIngredient);
        }
    } catch (error) {
        throw error;
    }
    console.log("created usersIngredients table");
    console.log(usersIngredients);
}

// Call my functions and build my database

const rebuildDb = async () => {
    try {
        // ACTUALLY connect to my local database
        client.connect();
        // Run our functions
        await dropTables();
        console.log('am i able to create?')
        await createTables();

        //Generating starting data
        console.log("starting to seed data...")
        await createInitialUsers();
        await createInitialRecipes();
        await createInitialIngredients();
        await createInitialRecipesIngredients();
        await createInitialUsersIngredients();

    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}

rebuildDb();