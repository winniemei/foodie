import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchRecipesIngredientsJunctionTable } from "../fetching.js"

export default function AllRecipes() {
	const [recipes, setRecipes] = useState([]);
	const [searchParam, setSearchParam] = useState("");
    const [junctionTable, setJunctionTable] = useState([]);
	// render all recipes    
	useEffect(() => {
		async function getAllRecipes() {
			const response = await fetchAllRecipes();
			// if (response.success) {
			console.log(response);
			setRecipes(response);
			// } else {
			// 	setError(response.error.message);
			// 	console.log("error loading recipes page");
			// }
		}
		getAllRecipes();
	}, []);

    useEffect(() => {
		async function getAllRecipesIngredients() {
			const junctionResponse = await fetchRecipesIngredientsJunctionTable();

            console.log('JUNCTION TABLE RESPONSE' + JSON.stringify(junctionResponse));

		}
		getAllRecipesIngredients();
	}, []);

	return (
		<div>
			<div>
				{/* <label>
					Search:{" "}
					<input
						type="text"
						placeholder="Search"
						onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
					/>
				</label> */}
			</div>
			<div>
				<div id="recipe-container">
					<h1>Here are my recipes!</h1>
					{recipes.map((recipe) => {
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
			</div>
		</div>
	)
}