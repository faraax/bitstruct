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
                // url: `${process.env.APIENDPOINT}auth/login`,
                url: `/api/login`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(userCredential),
            }

            let { data } = await axios.request(reqOptions);
            let decoded = jwt_decode(data.token);
            setLoading(false)
            dispatch({ type: 'LOGIN', payload: decoded })
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
            console.log("Login Err =>", err);
            setTimeout(() => setError(null), 5000)
        }
    }

    const userSignup = async (userCredential) => {
        setLoading(true)
        setError(null)
        try {
            let reqOptions = {
                // url: `${process.env.APIENDPOINT}auth/register`,
                url: '/api/signup',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(userCredential),
            }

            let { data } = await axios.request(reqOptions);
            setLoading(false)
            setMessage(data.message)
            setTimeout(() => setMessage(null), 8000)
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
            console.log("Err =>", err.message);
            setTimeout(() => setError(null), 5000)
        }
    }

    const forgotPassword = async (username) => {
        // console.log(username);
        setLoading(true)
        setError(null)
        try {
            let reqOptions = {
                // url: `${process.env.APIENDPOINT}auth/forgot-password`,
                url: '/api/forgot-password',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: username,
            }

            let { data } = await axios.request(reqOptions);
            setLoading(false)
            setMessage(data.message)
            setTimeout(() => setMessage(null), 8000)
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
        dispatch({ type: 'SETPROFILE', payload: null })
        setLoading(false)
    }

    return { userLogin, loading, error, logout, userSignup, message, forgotPassword }
}
