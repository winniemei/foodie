import { useState, useEffect } from "react";
import { fetchSingleRecipe } from "../fetching.js";

export default function SingleRecipe({id}) {
	const [oneRecipe, setOneRecipe] = useState([]);
	const [seeDetails, setSeeDetails] = useState(false);

	// function to see one recipe
    function handleSeeDetails() {
        setSeeDetails(!seeDetails);
    }
	
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
				<button id="button-detail" onClick={handleSeeDetails}>See Details</button>
							{seeDetails && <>
                            <h2>Instructions</h2>
							<div id="each-recipe">
							<h3>{oneRecipe.description}</h3>
							</div>
							</>}
				</div>
			</div>
		</div>
	)
}