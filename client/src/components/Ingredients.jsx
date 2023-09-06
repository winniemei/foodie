import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchAllIngredients } from "../fetching.js"

export default function AllIngredients() {
    const [ingredients, setIngredients] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const [checked, setChecked] = useState(false);
    const [checkedPantryIngredients, setCheckedPantryIngredients] = useState([]);
    // handling if the ingredient is checked off by user

    async function addToPantryIngredients(id) {
        try {
        const updatedCheckedPantryIngredients = [...checkedPantryIngredients];
        updatedCheckedPantryIngredients.push(id);
        setCheckedPantryIngredients(updatedCheckedPantryIngredients);
        console.log('listing my checked pantry ingredients' + checkedPantryIngredients);
        } catch (error) {
            console.error(error);
        }
    }
    async function handleCheck(id) {
        try {
            if (checked) {
                console.log('is this checked? ' + checked);
                addToPantryIngredients(id);
            } else {
                console.log('not checked');
            }
            setChecked(!checked);
            console.log('changed value of checkbox')
            } catch (error) {
                console.error(error);
            }
        };

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
                    <h1>Ingredients</h1>
                    {ingredients.map((ingredient) => {
                        return (
                            <>
                                <div id="each-ingredient">
                                    <label className="checkbox-container">
                                        <input type="checkbox" id={ingredient.ingredients_id} onChange={() => handleCheck(ingredient.ingredients_id)}/>
                                        {ingredient.name} {ingredient.ingredients_id}
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </>
                        )
                    })}
                    <div id="button-div">
                    <button id="recipe-button">My Pantry</button>
                    <button id="recipe-button">See Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}