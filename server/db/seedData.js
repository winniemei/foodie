// Make some arrays of objects

// Recipes
const recipes = [
    { title: "Scrambled eggs", cookingTime: 15, is_vegetarian: true, description: "you scramble some eggs", video: 'https://www.youtube.com/shorts/sdk0CEfTaIw', userId: 1 },
    { title: "Salmon avocado bowl", cookingTime: 20, is_vegetarian: true, description: "you put some avo and salmon together", video: 'https://www.youtube.com/shorts/sdk0CEfTaIw', userId: 2 }
]

// Users
const users = [
    { username: "Winnie", password: "bubbles" }, 
    { username: "Powerpuff", password: "Girls" }
]


// Ingredients

const ingredients = [
    { name: 'eggs', type: 'protein', image: 'salmonImage'}, 
    { name: 'salmon', type: 'fish', image: 'salmonImage'}
]


const recipes_ingredients = [
    { recipesId: 1, ingredientsId: 1},
    { recipesId: 2, ingredientsId: 2}
]

const users_ingredients = [
    { userId: 1, ingredientsId: 1 },
    { userId: 2, ingredientsId: 2 }
]

module.exports = { recipes, users, ingredients, recipes_ingredients, users_ingredients }