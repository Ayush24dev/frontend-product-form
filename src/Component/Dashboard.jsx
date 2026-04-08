import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Dashboard() {

    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) {
            navigate("/login");
            return;
        }

        axios.get("https://backend-product-meiz.onrender.com/dashboard", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setMessage(res.data.user.email)
        })
        .catch(() => {
            localStorage.removeItem("token")
            navigate('/login')
        })

    }, [navigate]);
 
    const handleLogout = () =>{
        localStorage.removeItem("token")
        navigate("/login")
    }
    return(
        <>
        <h1> welcome to dashboard</h1>
        <h2>Hello {message}</h2>
        <button onClick={handleLogout}>logout</button>
        </>
    )
}