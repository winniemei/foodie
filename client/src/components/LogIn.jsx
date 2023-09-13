import { useState } from "react";
import { login } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function LogIn({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        const response = await login(username, password);
        console.log('response.headers', response.data)

        const headers = response.headers;
        console.log('Response headers', headers)
        // setToken(register.data.token);
        setUsername('');
        setPassword('');
        navigate('/recipes')
    }
    return (
        <>
            <div id="log-in-container">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br/ >
                    <input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}