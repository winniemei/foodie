import React, { useState } from "react";
import { createRecipe } from "../fetching";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateRecipe() {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("")
    // const [price, setPrice] = useState("");
    // const [willDeliver, setWillDeliver] = useState("")
    // const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const APIData = await createRecipe();
        console.log("API Data",APIData)
    }

    return (
        <div className="formGroup">
            <form onSubmit={handleSubmit}>
                <input
                    className="inputField"
                    value="title"
                    type="text"
                    name="title"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value="{price}"
                    type="text"
                    name="price"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value="{description}"
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value="{willDeliver}"
                    type="text"
                    name="willDeliver"
                    placeholder="willDeliver"
                    onChange={(e) => setWillDeliver(e.target.value)}
                /><br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
}
