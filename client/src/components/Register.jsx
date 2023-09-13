import { useState } from 'react';
import { register } from '../fetching';
import { useNavigate } from 'react-router-dom';
import LogIn from './LogIn';

export default function Register({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        console.log('submitting register')
        const response = await register(username, password);
        // setToken(register.data.token);
        console.log(response);
        setUsername('');
        setPassword('');
        console.log('whoaaaa')
        // navigate('/recipes');
    }

    return(
        <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}