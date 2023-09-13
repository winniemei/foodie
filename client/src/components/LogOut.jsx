import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../fetching";

export default function LogOut({ token, setToken }) {
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        setToken(null);
    })


    return (
        <>
            <div id="log-in-container">
                <h1>You're logged out</h1>

            </div>
        </>
    )
}