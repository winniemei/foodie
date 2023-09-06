import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchAllIngredients } from "../fetching.js"
import MyPantry from "./MyPantry.jsx";

export default function AllIngredients() {
    const [ingredients, setIngredients] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const [checked, setChecked] = useState(false);
    const [checkedPantryIngredients, setCheckedPantryIngredients] = useState([]);

    // function to add ingredients to my pantry
    async function addToPantryIngredients(id) {
        try {
            const updatedCheckedPantryIngredients = [...checkedPantryIngredients];
            updatedCheckedPantryIngredients.push(id);
            setCheckedPantryIngredients(updatedCheckedPantryIngredients);
            console.log('listing my checked pantry ingredients after addition' + checkedPantryIngredients);
        } catch (error) {
            console.error(error);
        }
    }

    // function to remove ingredients from my pantry
    async function removeFromPantryIngredients(id) {
        try {
            const updatedCheckedPantryIngredients = checkedPantryIngredients.filter(ingredient => ingredient !== id)
            setCheckedPantryIngredients(updatedCheckedPantryIngredients);
            console.log('listing my checked pantry ingredients after removal' + checkedPantryIngredients);
        } catch (error) {
            console.error(error);
        }
    }

    // handle the user clicking the checkboxes and updating the pantry
    async function handleCheck(id) {
        try {
            if (checked) {
                console.log('is this checked? ' + checked);
                addToPantryIngredients(id);
            } else {
                console.log('is this checked?' + checked);
                removeFromPantryIngredients(id);
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
                                        <input type="checkbox" id={ingredient.ingredients_id} onChange={() => handleCheck(ingredient.ingredients_id)} />
                                        <h2>{checkedPantryIngredients}</h2>
                                        {ingredient.name} {ingredient.ingredients_id}
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </>
                        )
                    })}
                    <div id="pantry">
                    <h1>My Pantry<MyPantry /></h1>
                    </div>
                    <div id="button-div">
                        <button id="recipe-button">See Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}