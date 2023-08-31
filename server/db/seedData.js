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


const recipesIngredients = [
    { recipesId: 1, ingredientsId: 1},
    { recipesId: 1, ingredientsId: 2},
    { recipesId: 2, ingredientsId: 2}
]

const usersIngredients = [
    { usersId: 1, ingredientsId: 1 },
    { usersId: 1, ingredientsId: 2 },
    { usersId: 2, ingredientsId: 2 }
]

module.exports = { recipes, users, ingredients, recipesIngredients, usersIngredients }