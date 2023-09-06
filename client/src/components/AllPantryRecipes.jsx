import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchRecipesIngredientsJunctionTable } from "../fetching.js"

export default function AllPantryRecipes() {
    const [recipes, setRecipes] = useState([]);
	const [pantryRecipes, setPantryRecipes] = useState([]);

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

	return (
		<div>
			{/* <div>
				<div id="recipe-container">
					<h1>Here are my recipes!</h1>
					{pantryRecipes.map((recipe) => {
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
					})}
				</div>
			</div> */}
		</div>
	)
}