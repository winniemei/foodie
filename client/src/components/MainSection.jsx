import { Routes, Route } from "react-router-dom";
import AllRecipes from "./Recipes";
import Home from "./Home";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

export default function MainSection() {
	return (
		<div id="main-section">
            <h1>MAIN SECTION</h1>
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/logout" element={<LogOut />} />
				<Route path="/recipes" element={<AllRecipes />} />
			</Routes>
		</div>
	);
}
