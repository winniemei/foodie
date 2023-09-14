import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../fetching";

export default function LogOut({ token, setToken }) {
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setToken(null);
    })


    return (
        <>
            <div>
                <h1>You're logged out</h1>
                <img id="food-coma" src="https://i.pinimg.com/originals/ce/f2/29/cef22956f96f6af957fb1b5b6508ec0f.gif"></img>
            </div>
        </>
    )
}