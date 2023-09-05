import { Routes, Route } from "react-router-dom";
import AllRecipes from "./Recipes";

export default function MainSection() {
	return (
		<div id="main-section">
            <h1>MAIN SECTION</h1>
			<Routes>
				<Route path="/recipes" element={<AllRecipes />} />
			</Routes>
		</div>
	);
}
