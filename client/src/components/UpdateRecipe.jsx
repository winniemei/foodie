import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Select, MenuItem } from "@mui/material";
import { updateRecipe } from "../fetching";

export default function UpdateRecipe({ specificId }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cookingTime, setCookingTime] = useState("");
    const [description, setDescription] = useState("")
    const [is_vegetarian, setIsVegetarian] = useState(false);
    const [portions, setPortions] = useState("")
    const [title, setTitle] = useState(null);
    const [userId, setUserId] = useState(null);
    const [video, setVideo] = useState(null);
    const navigate = useNavigate();

    function handleClick() {
        setIsOpen(!isOpen);
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            const APIData = await updateRecipe(cookingTime, description, is_vegetarian, portions, title, userId, video, specificId);
            console.log("API Data", APIData);
            navigate(0);
            navigate('/recipes');
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        setIsVegetarian(e.target.value);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Update Recipe
            </button>
            {isOpen && (
                <div className="formGroup">
                    <h2>UPDATE YOUR RECIPE</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="inputField"
                            value={title}
                            type="text"
                            name="title"
                            placeholder="title of recipe"
                            onChange={(e) => setTitle(e.target.value)}
                        /><br />
                        <div>Cooking Time?</div><Input
                            className="inputField"
                            value={cookingTime}
                            type="number"
                            name="cookingTime"
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
                        <div>Vegetarian?</div>
                        <Select
                            className="inputField"
                            value={is_vegetarian}
                            type="text"
                            name="is_vegetarian"
                            placeholder="is_vegetarian"
                            onChange={handleChange}
                        >
                            <MenuItem value={false}>No</MenuItem>
                            <MenuItem value={true}>Yes</MenuItem>
                        </Select><br />
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
            )}
        </div>
    );
}
