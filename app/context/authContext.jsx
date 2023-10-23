"use client"
import { createContext, useEffect, useReducer } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";




export const AuthContext = createContext();

const initialState = {
    user: false,
    authIsReady: false
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: false }
        case "AUTHISREADY":
            return { ...state, authIsReady: true }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    const token = Cookies.get('jwtToken')

    useEffect(() => {
        let currentDate = new Date();

        if (token && jwt_decode(token).exp * 1000 > currentDate.getTime()) {
            let decodedToken = jwt_decode(token);
            dispatch({ type: 'AUTHISREADY' })
            dispatch({ type: 'LOGIN', payload: decodedToken })
        } else {
            dispatch({ type: 'AUTHISREADY' })
            Cookies.remove('jwtToken')
        }
    }, [token])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {state.authIsReady && children}
        </AuthContext.Provider>
    )
}