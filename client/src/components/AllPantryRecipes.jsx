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

	// getting associated corresponding recipes ids from ingredients in pantry
	console.log('LOGGING PANTRY RECIPES', pantryRecipes);
	const filteredRecipes = [];
	{
		pantryRecipes.map((pantryRecipe) => {
			if (checkedPantryIngredientsArray.includes(pantryRecipe.ingredientsid)) {
				filteredRecipes.push(pantryRecipe.recipesid);
				console.log('filtered recipes', filteredRecipes)
			}
		})
	}

	return (
		<div>
			<div>
				<div id="recipe-container">
					{recipes
						.filter((recipe) => filteredRecipes.includes(recipe.recipes_id))
						.map((recipe) => {
							return (
								<>
									<div id="each-recipe">
										<h3>{recipe.title}</h3>
										<h3>Ingredients: {recipe.portions}</h3>
										<h3>Minutes: {recipe.cookingtime}</h3>

										<iframe width="478" height="850" src={recipe.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

										<h3></h3>
									</div>
								</>
							)
						})}

				</div>
			</div>
		</div>
	)
}