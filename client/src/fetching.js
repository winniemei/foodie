const BASE_URL = "http://localhost:8080/api"

export const fetchAllRecipes = async () => {
    try {
        const response = await fetch(`${BASE_URL}/recipes`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot fetch all recipes", error);
    }
}

export const fetchSingleRecipe = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/recipes/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot fetch single recipe", error);
    }
}

export const deleteRecipe = async (id) => {
    try {
        console.log('..entering delete recipe')
        const response = await fetch(`${BASE_URL}/recipes/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });
    } catch (error) {
        console.error("Cannot delete recipe", error);
    }
}

export const createRecipe = async (cookingTime, description, is_vegetarian, portions, title, userId, video) => {
    try {
        console.log('...starting to post')
        const response = await fetch(`${BASE_URL}/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    cookingTime: cookingTime,
                    description: description,
                    is_vegetarian: is_vegetarian,
                    portions: [portions],
                    title: title,
                    userId: userId,
                    video: video
            })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot post recipe", error);
    }
}

export const fetchAllIngredients = async () => {
    try {
        const response = await fetch(`${BASE_URL}/ingredients`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot fetch all ingredients", error);
    }
}

export const fetchRecipesIngredientsJunctionTable = async () => {
    try {
        const response = await fetch(`${BASE_URL}/recipesIngredients`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot fetch all recipes + ingredients", error);
    }
}