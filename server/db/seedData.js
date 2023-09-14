// Make some arrays of objects

// Recipes
const recipes = [
    { title: "Scrambled eggs", portions: "2 eggs\n1/4 stick of butter", cookingTime: 15, is_vegetarian: true, description: "1. Start off with cold eggs\n2. Take three knobs of butter\n3. Stir eggs with butter\n4. Take pan off and on the heat every 30 seconds\n5. Lightly season eggs\n6. Put in 1 tspn of creme fraiche\n7. Serve on toast", video: 'https://www.youtube.com/embed/sdk0CEfTaIw', userId: 1 },
    { title: "Salmon avocado poke bowl", portions: "1 filet of salmon\n1 avocado", cookingTime: 20, is_vegetarian: true, description: "1. Cube up sashimi grade salmon\n2. Add kewpie mayo + sriracha + sesame oil + sesame seeds\n3. Add masago + cucumber + scallions\n4. Fill a bowl with Japanese rice and furikake\n5. Top with salmon mixture + avocado", video: 'https://www.youtube.com/embed/WM_A_ehCt_4', userId: 2 },
    { title: "Crab", portions: "Crab legs", cookingTime: 20, is_vegetarian: false, description: "1. Steam crab legs for 5 - 7 minutes\n2. Add butter and minced garlic into a pan and give it a mix\n3. Add cajun seasoning, italian seasoning, paprika, salt into the pan\n4. Drizzle sauce over crab legs", video: 'https://www.youtube.com/embed/tz2IVtgRgJg', userId: 2 },
    { title: "Shrimp tempura roll", portions: "Shrimp\nNori\nRice", cookingTime: 30, is_vegetarian: false, description: "1. Deshell and devein shrimps\n2. Coat with flour lightly\n3. Coat with tempura batter\n4. Deep fry shrimps + drizzle some batter to crispy skin\n5. Spread cooked rice on a nori sheet\n6. Add shrimp, mayo, and wasabi to nori sheet and roll", video: 'https://www.youtube.com/embed/9VVWl1qQH3I', userId: 2 },
    { title: "Katsudon", portions: "Pork\nEggs\nRice", cookingTime: 30, is_vegetarian: false, description: "1. Season pork loin with salt & pepper\n2. Coat pork loin with flour and then egg mixture\n3. Coat pork loin with bread crumbs\n4. Bake at 375 degrees for 20 - 25 minutes\n5. Cut one whole yellow onion into slices\n6. Cook onion in pan with 1 tsp mirin and 1 tsp sake\n7. Add 1 tsp soy sauce\n8. Add in the pork loin\n9. Add in 1 egg, milk & water\n10. Let simmer & serve with rice", video: 'https://www.youtube.com/embed/dJl4wK2LnMc', userId: 2 }
]


// Users
const users = [
    { username: "Winnie", password: "bubbles" },
    { username: "Powerpuff", password: "Girls" }
]

// Ingredients

const ingredients = [
    { name: 'eggs', type: 'protein', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Fried_Egg_2.jpg' },
    { name: 'salmon', type: 'fish', image: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiqyPX13oeBAxWq8ZQJHVbFD3EYABAHGgJ5bQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVq92yqUo9l-_MBwq_585o6Q79egElUYWL4xjfBbfQnIxj8i6Gz_CMaAniCEALw_wcB&sig=AOD64_3WnKrZIzawVhN7GGTqt3FNveyMig&ctype=5&nis=5&adurl&ved=2ahUKEwj7vuP13oeBAxWeH2IAHZMKCDIQvhd6BQgBEI8B' },
    { name: 'avocado', type: 'veggie', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB" },
    { name: 'crab', type: 'seafood', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB" },
    { name: 'butter', type: 'butter', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB" },
    { name: 'rice', type: 'grain', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB" },
    { name: 'pork', type: 'meat', image: "https://www.google.com/aclk?sa=l&ai=DChcSEwirm4yL34eBAxUJjcgKHfqQA0AYABALGgJxdQ&ase=2&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVVNW6WQUPfKmo09UxWpb_Z1ST6_t4HMaOAeVSI7h8xkhGOztrY_qkcaAkhNEALw_wcB&sig=AOD64_1iNBb2gjhx_iCtR-AkX9HxPaqygw&ctype=5&nis=5&adurl&ved=2ahUKEwiKsvyK34eBAxWXIWIAHeqiD0IQvhd6BQgBEKAB" },
]


const recipesIngredients = [
    { recipesId: 1, ingredientsId: 1 },
    { recipesId: 2, ingredientsId: 2 },
    { recipesId: 2, ingredientsId: 3 },
    { recipesId: 3, ingredientsId: 4 },
    { recipesId: 3, ingredientsId: 5 },
    { recipesId: 1, ingredientsId: 5 },
    { recipesId: 2, ingredientsId: 6 },
    { recipesId: 4, ingredientsId: 6 },
    { recipesId: 5, ingredientsId: 1 },
    { recipesId: 5, ingredientsId: 6 },
    { recipesId: 5, ingredientsId: 7 }
]

const usersIngredients = [
    { usersId: 1, ingredientsId: 3 },
    { usersId: 1, ingredientsId: 2 },
    { usersId: 2, ingredientsId: 1 }
]

module.exports = { recipes, users, ingredients, recipesIngredients, usersIngredients }