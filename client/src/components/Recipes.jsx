import { useState, useEffect } from "react";
import { fetchAllRecipes } from "../fetching.js"

export default function AllRecipes() {
    const [recipes, setRecipes] = useState([]);

    // render all recipes    
    useEffect(() => {
		async function getAllRecipes() {
			const response = await fetchAllRecipes();
			// if (response.success) {
                console.log(response)
				return(response)
			// } else {
			// 	setError(response.error.message);
			// 	console.log("error loading recipes page");
			// }
		}
		getAllRecipes();
	}, []);
    return (
        <div>
        </div>
    )
}