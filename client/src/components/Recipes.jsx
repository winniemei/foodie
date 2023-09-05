import { useState, useEffect } from "react";
import { fetchAllRecipes } from "../fetching.js"

export default function AllRecipes() {
	const [recipes, setRecipes] = useState([]);
	const [searchParam, setSearchParam] = useState("");
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

	const recipesToDisplay = searchParam
		? recipes.filter((recipe) =>
			recipe.toLowerCase().includes(searchParam)
		)
		: recipes;

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
							<a href="url">{recipe.video}</a>
							
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