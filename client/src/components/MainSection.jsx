import { Routes, Route } from "react-router-dom";
import AllRecipes from "./Recipes";
import Home from "./Home";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import AllIngredients from "./Ingredients";
import SingleRecipe from "./SingleRecipe";

export default function MainSection() {
	return (
		<div id="main-section">
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/logout" element={<LogOut />} />
				<Route path="/recipes" element={<AllRecipes />} />
                <Route path="/ingredients" element={<AllIngredients />} />
			</Routes>
		</div>
	);
}
