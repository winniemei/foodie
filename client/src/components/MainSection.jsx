import { Routes, Route } from "react-router-dom";
import AllRecipes from "./Recipes";
import Home from "./Home";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import AllIngredients from "./Ingredients";
import SingleRecipe from "./SingleRecipe";
import Register from "./Register";

export default function MainSection() {
	return (
		<div id="main-section">
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/logout" element={<LogOut />} />
				<Route path="/recipes" element={<AllRecipes />} />
				<Route path="/recipes/:id" element={<SingleRecipe />}/>
                <Route path="/ingredients" element={<AllIngredients />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}
