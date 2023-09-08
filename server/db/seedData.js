// Make some arrays of objects

// Recipes
const recipes = [
    { title: "Fried eggs", portions: ['2 eggs','1/4 stick of butter'], cookingTime: 15, is_vegetarian: true, description: "1. Heat a skillet over medium-low, allowing it to fully pre-heat (3-5 minutes) 2. Add the butter (or fat of choice) and swirl to coat the surface of the skillet. 3. Crack the egg into the frying pan and cook until the whites are set and the yolk is still liquid (sunny side up). 4.For over easy, over medium, or over hard, cook the egg until the whites are 50-75% set, then flip the egg and continue cooking on the second side until the yolk is cooked to your desired doneness. 5. Transfer the egg to a plate and season with salt and pepper. Enjoy!", video: 'https://www.youtube.com/embed/sdk0CEfTaIw', userId: 1 },
    { title: "Salmon avocado bowl", portions: ['1 filet of salmon', '1 avocado'], cookingTime: 20, is_vegetarian: true, description: "you put some avo and salmon together", video: 'https://www.youtube.com/embed/WM_A_ehCt_4', userId: 2 },
    { title: "Crab", portions: ['1 crab'], cookingTime: 20, is_vegetarian: false, description: "1. Steam crab legs for 5 - 7 minutes 2. Put butter, paprika, salt into pan and fry crab legs", video: 'https://www.youtube.com/embed/tz2IVtgRgJg', userId: 2 },
    { title: "Shrimp tempura roll", portions: ['Shrimp', 'Nori', 'Rice'], cookingTime: 30, is_vegetarian: false, description: "1. Make some shrimp tempura rolls", video: 'https://www.youtube.com/embed/9VVWl1qQH3I', userId: 2 },
    { title: "Katsudon", portions: ['Pork', 'Eggs', 'Rice'], cookingTime: 30, is_vegetarian: false, description: "Make some katsudon", video: 'https://www.youtube.com/embed/dJl4wK2LnMc', userId: 2 }
]


// Users
const users = [
    { username: "Winnie", password: "bubbles" }, 
    { username: "Powerpuff", password: "Girls" }
]

// Ingredients

const ingredients = [
    { name: 'eggs', type: 'protein', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Fried_Egg_2.jpg'}, 
    { name: 'salmon', type: 'fish', image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiqyPX13oeBAxWq8ZQJHVbFD3EYABAHGgJ5bQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVq92yqUo9l-_MBwq_585o6Q79egElUYWL4xjfBbfQnIxj8i6Gz_CMaAniCEALw_wcB&sig=AOD64_3WnKrZIzawVhN7GGTqt3FNveyMig&ctype=5&nis=5&adurl&ved=2ahUKEwj7vuP13oeBAxWeH2IAHZMKCDIQvhd6BQgBEI8B'}, 
    { name: 'avocado', type: 'veggie', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB"},
    { name: 'crab', type: 'seafood', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB"},
    { name: 'butter', type: 'butter', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB"},
    { name: 'rice', type: 'grain', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB"},
    { name: 'pork', type: 'meat', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB"},
]


const recipesIngredients = [
    { recipesId: 1, ingredientsId: 1},
    { recipesId: 2, ingredientsId: 2},
    { recipesId: 2, ingredientsId: 3},
    { recipesId: 3, ingredientsId: 4},
    { recipesId: 3, ingredientsId: 5},
    { recipesId: 1, ingredientsId: 5},
    { recipesId: 2, ingredientsId: 6},
    { recipesId: 4, ingredientsId: 6},
    { recipesId: 5, ingredientsId: 1},
    { recipesId: 5, ingredientsId: 6},
    { recipesId: 5, ingredientsId: 7}
]

const usersIngredients = [
    { usersId: 1, ingredientsId: 3 },
    { usersId: 1, ingredientsId: 2 },
    { usersId: 2, ingredientsId: 1 }
]

module.exports = { recipes, users, ingredients, recipesIngredients, usersIngredients }