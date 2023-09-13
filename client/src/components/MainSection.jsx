import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AllRecipes from "./Recipes";
import Home from "./Home";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import AllIngredients from "./Ingredients";
import SingleRecipe from "./SingleRecipe";
import Register from "./Register";

export default function MainSection() {
	const [token, setToken] = useState(null);
	return (
		<div id="main-section">
			<Routes>
				<Route path="/" element={<Home token={token} />} />
				<Route path="/login" element={<LogIn setToken={setToken} token={token} />} />
				<Route path="/logout" element={<LogOut />} />
				<Route path="/recipes" element={<AllRecipes token={token} />} />
				<Route path="/recipes/:id" element={<SingleRecipe token={token} />} />
				<Route path="/ingredients" element={<AllIngredients token={token} />} />
				<Route path="/register" element={<Register setToken={setToken} token={token} />} />
			</Routes>
		</div>
	);
}
