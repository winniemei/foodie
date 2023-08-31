// Make some arrays of objects

// Recipes
const recipes = [
    { title: "Scrambled eggs", cookingTime: 15, likes: 5, is_vegetarian: true, description: "you scramble some eggs", video: 'https://www.youtube.com/shorts/sdk0CEfTaIw', comments: "yum"},
    { title: "Salmon avocado bowl", cookingTime: 20, likes: 35, is_vegetarian: true, description: "you put some avo and salmon together", video: 'https://www.youtube.com/shorts/sdk0CEfTaIw', comments: "more yum"}
]

// User
const users = [
    { username: "Winnie", password: "yup", authoredRecipes: [authored_recipes], favoritedRecipes: [favoritedRecipes] }, 
    { username: "Ada", password: "Lovelace", authoredRecipes: [], favoritedRecipes: []}
]


// Ingredients

const ingredients = [
    { name: 'eggs', type: 'protein', image: 'salmonImage'}, 
    { name: 'salmon', type: 'fish', image: 'salmonImage'}
]