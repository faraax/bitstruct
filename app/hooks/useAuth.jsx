"use client"

import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export default function useAuth() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('')
    const { dispatch } = useAuthContext()
    // const token = Cookies.get('jwtToken');

    const userLogin = async (userCredential) => {
        setLoading(true)
        setError(null)
        try {
            let reqOptions = {
                url: "http://api.bidstruct.com/auth/login",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(userCredential),
            }

            let { data } = await axios.request(reqOptions);

            let decoded = jwt_decode(data.token);
            Cookies.set("jwtToken", data.token)
            setLoading(false)
            dispatch({ type: 'LOGIN', payload: decoded })
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
            console.log("Login Err =>", err.message);
            setTimeout(() => setError(null), 5000)
        }
    }

    const userSignup = async (userCredential) => {
        setLoading(true)
        setError(null)
        try {
            let reqOptions = {
                url: "http://api.bidstruct.com/auth/register",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(userCredential),
            }

            let { data } = await axios.request(reqOptions);

            setLoading(false)
            setMessage(data.message)
            console.log(data);
            setTimeout(() => setMessage(null), 5000)
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
            console.log("Err =>", err.message);
            setTimeout(() => setError(null), 5000)
        }
    }

    const logout = () => {
        setLoading(true)
        Cookies.remove("jwtToken")
        dispatch({ type: 'LOGOUT' })
        setLoading(false)
    }

    return { userLogin, loading, error, logout, userSignup, message }
}
