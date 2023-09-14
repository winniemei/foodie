import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AllRecipes from "./Recipes";
import Home from "./Home";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import AllIngredients from "./Ingredients";
import SingleRecipe from "./SingleRecipe";
import Register from "./Register";
import CreateRecipe from "./CreateRecipe";

export default function MainSection() {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	localStorage.setItem("token", token);
	localStorage.setItem("userId", userId);
	return (
		<div id="main-section">
			<Routes>
				<Route path="/" element={<Home token={token} userId={userId} />} />
				<Route path="/login" element={<LogIn setToken={setToken} token={token} userId={userId} setUserId={setUserId} />} />
				<Route path="/logout" element={<LogOut setToken={setToken} token={token} />} />
				<Route path="/recipes" element={<AllRecipes token={token} userId={userId} />} />
				<Route path="/recipes/:id" element={<SingleRecipe token={token} userId={userId} />} />
				<Route path="/ingredients" element={<AllIngredients token={token} userId={userId} />} />
				<Route path="/register" element={<Register setToken={setToken} token={token} setUserId={setUserId} userId={userId} />} />
			</Routes>
		</div>
	);
}
