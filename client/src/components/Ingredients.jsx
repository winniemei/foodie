import { useState, useEffect } from "react";
import { fetchAllRecipes, fetchAllIngredients } from "../fetching.js"

export default function AllIngredients() {
	const [ingredients, setIngredients] = useState([]);
	const [searchParam, setSearchParam] = useState("");
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
					<h1>Pantry</h1>
					{ingredients.map((ingredient) => {
						return(
							<>
							<div id="each-ingredient">
							<h3>{ingredient.name}</h3>
                            <a href src={ingredient.image}></a>
							
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