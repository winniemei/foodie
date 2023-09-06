import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchRecipesIngredientsJunctionTable } from "../fetching.js"

export default function AllPantryRecipes({ checkedPantryIngredients, ingredients }) {
	const [recipes, setRecipes] = useState([]);
	const [pantryRecipes, setPantryRecipes] = useState([]);
	const [chosenRecipes, setChosenRecipes] = useState([]);
	const checkedPantryIngredientsArray = [...checkedPantryIngredients]

	// render all recipes    
	useEffect(() => {
		async function getAllRecipes() {
			const response = await fetchAllRecipes();
			console.log(response);
			setRecipes(response);
			console.log('ALL RECIPES', response)
		}
		getAllRecipes();
	}, []);

	useEffect(() => {
		async function getAllRecipesIngredients() {
			const junctionResponse = await fetchRecipesIngredientsJunctionTable();
			setPantryRecipes(junctionResponse);
			console.log('ALL PANTRY RECIPES', junctionResponse);

		}
		getAllRecipesIngredients();
	}, []);

	console.log('LOGGING PANTRY RECIPES', pantryRecipes);
	
	{pantryRecipes.map((pantryRecipe) =>  {
		console.log('pantryRecipe.ingredientsid', pantryRecipe.ingredientsid);
		console.log('LOGGING CHECKED PANTRY INGREDIENTS', checkedPantryIngredientsArray);
		if (checkedPantryIngredientsArray.includes(pantryRecipe.ingredientsid)) {
			console.log('recipeid', pantryRecipe.recipesid)
		}
	})}
	return (
		<div>
			<div>
				<div id="recipe-container">
					<h1>Here's some food that you can make!</h1>
					<>
					{}
					</>
				</div>
			</div>
		</div>
	)
}