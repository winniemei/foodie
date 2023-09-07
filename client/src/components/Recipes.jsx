import { useState, useEffect } from "react";
import { fetchAllRecipes } from "../fetching.js";
import SingleRecipe from "./SingleRecipe.jsx";
import DeleteRecipe from "./DeleteRecipe.jsx";
import CreateRecipe from "./CreateRecipe.jsx";

export default function AllRecipes() {
	const [recipes, setRecipes] = useState([]);
	const [searchParam, setSearchParam] = useState("");
	const [seeDetails, setSeeDetails] = useState(false);

	// function to see pantry recipes
    function handleSeeDetails() {
        setSeeDetails(!seeDetails);
    }

	// render all recipes    
	useEffect(() => {
		async function getAllRecipes() {
			const response = await fetchAllRecipes();
			console.log(response);
			setRecipes(response);
		}
		getAllRecipes();
	}, []);

	const recipesToDisplay = searchParam
		? recipes.filter((recipe) =>
			recipe.title.toLowerCase().includes(searchParam)
		)
		: recipes;

	return (
		<div>
			<div>
				<label>
					Search:{" "}
					<input
						type="text"
						placeholder="Search"
						onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
					/>
				</label>
			</div>
			<div>
				<div id="recipe-container">
					<h1>All Recipes</h1>
					{recipesToDisplay.map((recipe) => {
						return(
							<>
							<div id="each-recipe">
							<h3>{recipe.title}</h3>
							<h3>Ingredients: {recipe.portions}</h3>
							<h3>Minutes: {recipe.cookingtime}</h3>

							<iframe width="478" height="850" src={recipe.video}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							<br />
							<button id="button-detail" onClick={handleSeeDetails}>See Details</button>
							{seeDetails && <SingleRecipe id={recipe.recipes_id}/>}
							<div><DeleteRecipe specificId={recipe.recipes_id} /></div>
							</div>
							</>
						)
					})}
					<br />
					<div>Add a new recipe</div>
					<div><CreateRecipe /></div>
				</div>
			</div>
		</div>
	)
}