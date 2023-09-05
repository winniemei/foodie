import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchAllIngredients } from "../fetching.js"

export default function AllIngredients() {
    const [ingredients, setIngredients] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    // render all recipes    
    useEffect(() => {
        async function getAllIngredients() {
            const response = await fetchAllIngredients();
            // if (response.success) {
            console.log(response);
            setIngredients(response);
            // } else {
            // 	setError(response.error.message);
            // 	console.log("error loading recipes page");
            // }
        }
        getAllIngredients();
    }, []);

    return (
        <div>
            <div>
                <div id="ingredients-container">
                    <h1>Pantry</h1>
                    {ingredients.map((ingredient) => {
                        return (
                            <>
                                <div id="each-ingredient">
                                    <label className="checkbox-container">
                                        <input type="checkbox" />
                                        {ingredient.name}
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}