import { useState, useEffect } from "react";
import { fetchAllRecipes } from "../fetching.js";
import SingleRecipe from "./SingleRecipe.jsx";
import DeleteRecipe from "./DeleteRecipe.jsx";
import CreateRecipe from "./CreateRecipe.jsx";
import UpdateRecipe from "./UpdateRecipe.jsx";

export default function AllRecipes({ token, userId }) {
	const [recipes, setRecipes] = useState([]);
	const [searchParam, setSearchParam] = useState("");

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
						id="search"
						className="inputField"
						type="text"
						placeholder="Search"
						onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
					/>
				</label>
			</div>
			<div>
				<div id="recipe-container">
					<h1>All Recipes</h1>
					{token && recipesToDisplay.map((recipe) => {
						return (
							<>
								{
									<div id="each-recipe">
										<h3>{recipe.title}</h3>
										<h3>Ingredients: </h3>
										<div id="ingredientList">{recipe.portions}</div>
										<h3>Minutes: {recipe.cookingtime}</h3>

										<iframe width="478" height="850" src={recipe.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
										<br />
										{<SingleRecipe id={recipe.recipes_id} />}
										{console.log('LOCAL STORAGE USER ID', localStorage.getItem("userId"))}
										{console.log('RECIPE USER ID', recipe.userid)}
										{console.log('RECIPE', recipe)}
										<div>{(Number(userId) === recipe.userid) && <DeleteRecipe specificId={recipe.recipes_id} />}
											{(Number(userId) === recipe.userid) && <UpdateRecipe specificId={recipe.recipes_id} userId={userId} />}</div>
									</div>
								}
							</>
						)
					})}
					<br />
					<div>{localStorage.getItem("token") && <CreateRecipe userId={userId} />}</div>
				</div>
			</div>
		</div>
	)
}