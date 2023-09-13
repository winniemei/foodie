import { useState } from "react";
import { login, register } from "../fetching";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

export default function LogIn({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        const response = await login(username, password);
        console.log('RESPONSE', response.token)
        setToken(response.token);
        setUsername('');
        setPassword('');
        navigate('/recipes')
    }
    return (
        <>
            <div id="log-in-container">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <input id="username" className="inputField" autoFocus placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <input className="inputField" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type="submit">SIGN IN</button>
                </form>
            </div>
        </>
    )
}