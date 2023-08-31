// pulling in connection to my local database
const client = require('./client');

const { recipes, users, ingredients } = require('./seedData');

const dropTables = async() => {
    try {
        console.log("Starting to drop tables");
        await client.query(`
        DROP TABLE IF EXISTS recipes;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS ingredients;
        `)
    } catch (error) {
        console.log("Error dropping tables");
        throw error;
    }
}

const createTables = async () => {
    console.log("Building tables...") 
    await client.query(`
        CREATE TABLE recipes (
            recipes_id SERIAL PRIMARY KEY,
            title varchar(255) UNIQUE NOT NULL,
            cookingTime INTEGER NOT NULL,
            likes INTEGER,
            
        )`)
}




// Call my functions and build my database

const rebuildDb = async () => {
    try {
        // ACTUALLY connect to my local database
        client.connect();
        // Run our functions
        await dropTables();
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}

rebuildDb();