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
        if (response.status === 204) {
            // 204 No Content response indicates successful deletion with no JSON content.
            console.log('Recipe deleted successfully');
        } else {
            // Handle other response statuses (e.g., error responses)
            const responseText = await response.text();
            console.error("Cannot delete recipe. Server response:", responseText);

        }
    } catch (error) {
        console.error("Cannot delete recipe", error);
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