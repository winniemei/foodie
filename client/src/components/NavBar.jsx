import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {

	return (
		<div id="navbar-container">
			<Link to="/">Home</Link>
            <Link to="/logIn">Log In</Link>
			<Link to="/recipes">Recipes</Link>
            <Link to="/logOut">Log Out</Link>
		</div>
	);
}
