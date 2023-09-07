import React, { useState } from "react";
import { createRecipe } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function CreateRecipe() {
    const [cookingTime, setCookingTime] = useState("");
    const [description, setDescription] = useState("")
    const [is_vegetarian, setIsVegeterian] = useState("");
    const [portions, setPortions] = useState("")
    const [title, setTitle] = useState(null);
    const [userId, setUserId] = useState(null);
    const [video, setVideo] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const APIData = await createRecipe(cookingTime, description, is_vegetarian, portions, title, userId, video);
        console.log("API Data", APIData)
    }

    return (
        <div className="formGroup">
            <form onSubmit={handleSubmit}>
                <input
                    className="inputField"
                    value={title}
                    type="text"
                    name="title"
                    placeholder="title of recipe"
                    onChange={(e) => setTitle(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={cookingTime}
                    type="text"
                    name="cookingTime"
                    placeholder="cookingTime"
                    onChange={(e) => setCookingTime(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={portions}
                    type="text"
                    name="portions"
                    placeholder="ingredients needed"
                    onChange={(e) => setPortions(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={description}
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={is_vegetarian}
                    type="text"
                    name="is_vegetarian"
                    placeholder="is_vegetarian"
                    onChange={(e) => setIsVegeterian(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={video}
                    type="text"
                    name="video"
                    placeholder="video"
                    onChange={(e) => setVideo(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={userId}
                    type="text"
                    name="userId"
                    placeholder="userId"
                    onChange={(e) => setUserId(e.target.value)}
                /><br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}
