import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllRecipes } from "../fetching";

const cohortName = "2306-GHP-ET-WEB-FT-SF";
const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export default function CreateRecipe() {
	// const [postTitle, setpostTitle] = useState("");
	// const [postPrice, setpostPrice] = useState("");
	// const [postLocation, setpostLocation] = useState("");
	// const [postDelivery, setpostDelivery] = useState(false);
	// const [postDescription, setpostDescription] = useState("");

	// const [successMessage, setSuccessMessage] = useState(null);

	// const navigate = useNavigate();

	// // access current state from redux store
	// const tokenC = useSelector((state) => state.user.token);

	// const handleChange = (event) => {
	// 	setpostDelivery(event.target.value);
	// };

	// async function handleSubmit(event) {
	// 	event.preventDefault();
	// 	let postData = {
	// 		post: {
	// 			title: postTitle,
	// 			price: postPrice,
	// 			location: postLocation,
	// 			willDeliver: postDelivery,
	// 			description: postDescription,
	// 		},
	// 	};

	// 	try {
	// 		const response = await fetch(`${API_URL}/posts`, {
	// 			method: "POST",
	// 			body: JSON.stringify(postData),
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				Authorization: `Bearer ${tokenC}`,
	// 			},
	// 		});
	// 		console.log("response from NPF: ", response);
	// 		const result = await response.json();
	// 		console.log("result from NPF: ", result);
	// 		setSuccessMessage("Post submitted");
	// 		fetchAllPosts();
	// 		navigate("/profile");
	// 	} catch (err) {
	// 		console.error("Oops, something went wrong with adding that post!", err);
	// 	}
	// }

	return (
		<>
			
		</>
	);
}
