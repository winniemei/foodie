import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {

	return (
		<div id="navbar-container">
			<Link to="/">Home</Link>
			<Link to="/recipes">Recipes</Link>
		</div>
	);
}
