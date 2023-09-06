import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchAllIngredients } from "../fetching.js"
import MyPantry from "./MyPantry.jsx";
import AllPantryRecipes from "./AllPantryRecipes.jsx";

export default function AllIngredients() {
    const [ingredients, setIngredients] = useState([]);
    const [checkedPantryIngredients, setCheckedPantryIngredients] = useState([]);
    const [checkboxes, setCheckboxes] = useState({});

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
            const isChecked = checkboxes[id];

            if (isChecked) {
                removeFromPantryIngredients(id);
            } else {
                addToPantryIngredients(id);
            }
            setCheckboxes(previousCheckboxes => ({
                ...previousCheckboxes,
                [id]: !isChecked,
              }))
            console.log('changed value of checkbox'+ id)
            console.log('checkboxes', checkboxes)
            console.log('checked pantry ingredients', checkedPantryIngredients)
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
                                        {ingredient.name}
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </>
                        )
                    })}
                    <div id="pantry">
                    <h2>My Pantry</h2>
                    <MyPantry checkedPantryIngredients={checkedPantryIngredients} ingredients={ingredients}/>
                    </div>
                    <div id="button-div">
                        <button id="recipe-button">See Recipes</button>
                        <AllPantryRecipes checkedPantryIngredients={checkedPantryIngredients} ingredients={ingredients} />
                    </div>
                </div>
            </div>
        </div>
    )
}