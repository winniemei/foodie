import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchRecipesIngredientsJunctionTable } from "../fetching.js"

export default function AllPantryRecipes({ checkedPantryIngredients, ingredients }) {
    const [recipes, setRecipes] = useState([]);
	const [pantryRecipes, setPantryRecipes] = useState([]);
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

	// check if pantry ingredient ids are contained in Pantry recipes
	// iterate thru the junction table, return recipesid for when checkedPantryIngredientsArray id equals to ingredientsid of pantryRecipes
	const chosenRecipes = []; 

	pantryRecipes.map((pantryRecipe) => {
		if (pantryRecipe.ingredientsid in checkedPantryIngredientsArray) {
			chosenRecipes.push(pantryRecipe.recipesid)
			console.log('CHOSEN RECIPES', chosenRecipes);
			return pantryRecipe.recipesid;
		}
	})

	return (
		<div>
			<div>
				<div id="recipe-container">
					<h1>Here's some food that you can make!</h1>
					
					{/* {pantryRecipes.map((recipe) => {
						return(
							<>
							<div id="each-recipe">
							<h3>{recipe.title}</h3>
							<h3>Ingredients: {recipe.portions}</h3>
							<h3>Minutes: {recipe.cookingtime}</h3>

							<iframe width="478" height="850" src={recipe.video}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							
							<h3></h3>
							</div>
							</>
						)
					})} */}
				</div>
			</div>
		</div>
	)
}