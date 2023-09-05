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