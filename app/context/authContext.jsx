"use client"
import { createContext, useEffect, useLayoutEffect, useReducer } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext();

const initialState = {
    user: false,
    authIsReady: false,
    subscription: null,
    profiles: null,
    selectedProfile: null
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: false }
        case "AUTHISREADY":
            return { ...state, authIsReady: true }
        case "SETSUB":
            return { ...state, subscription: action.payload }
        case "SETPROFILE":
            return { ...state, profiles: action.payload }
        case "SELECTEDPROFILE":
            return { ...state, selectedProfile: action.payload }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    const token = Cookies.get('jwtToken')

    useEffect(() => {
        const getSub = async () => {
            // setLoading(true)
            try {
                let reqOptions = {
                    // url: `${process.env.APIENDPOINT}api/get_subscription_data`,
                    url: `/api/get_subscription_data`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${token}`
                    }
                }

                let resp = await axios.request(reqOptions);
                if (resp.status === 200) {
                    dispatch({ type: 'SETSUB', payload: resp?.data })
                }
            } catch (err) {
                console.log(err);
            }
        }

        const getProfile = async () => {
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/getUsersProfilesList`,
                    // url: `/api/getUsersProfilesList`,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${token}`
                    }
                }

                let resp = await axios.request(reqOptions);
                // console.log(resp);
                if (resp.status === 200) {
                    dispatch({ type: 'SETPROFILE', payload: resp.data.profiles })
                    dispatch({ type: 'SELECTEDPROFILE', payload: resp.data.profiles[0] })
                }
            } catch (err) {
                console.log(err);
            }
        }

        if (token) {
            let decodedToken = jwt_decode(token);
            let currentDate = new Date();
            if (decodedToken.exp * 1000 > currentDate.getTime()) {
                getSub();
                getProfile();
                // console.log("Decoded token");
                dispatch({ type: 'AUTHISREADY' });
                dispatch({ type: 'LOGIN', payload: decodedToken });
            } else {
                // console.log("removed token");
                dispatch({ type: 'AUTHISREADY' });
                // Cookies.remove('jwtToken');
            }
        } else {
            // console.log("removed token");
            dispatch({ type: 'AUTHISREADY' });
            // Cookies.remove('jwtToken');
        }
    }, [token])
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {state.authIsReady && children}
        </AuthContext.Provider>
    )
}