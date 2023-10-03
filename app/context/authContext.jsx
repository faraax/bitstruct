import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
    user: false,
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: true }
        case "LOGOUT":
            return { ...state, user: false }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}