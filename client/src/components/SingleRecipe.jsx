import { useState, useEffect } from "react";
import { fetchSingleRecipe } from "../fetching.js";

export default function SingleRecipe({id}) {
	const [oneRecipe, setOneRecipe] = useState([]);
	
    // render single recipe
	useEffect(() => {
		async function getSingleRecipe() {
			const response = await fetchSingleRecipe(id);
			console.log('ONE RECIPE', response);
			setOneRecipe(response);
		}
		getSingleRecipe();
	}, []);


	return (
		<div>
			<div>
				<div>
							<>
                            <h2>Instructions</h2>
							<div id="each-recipe">
							<h3>{oneRecipe.description}</h3>
							</div>
							</>
				</div>
			</div>
		</div>
	)
}