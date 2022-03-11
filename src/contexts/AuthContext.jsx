import React, { useState, createContext } from 'react'

// Create Context for Login Condition
export const LoginContext = createContext();
export const LoginProvider = ({children}) => {
    const [ login, setLogin]  = useState(false);

    return (
        <LoginContext.Provider value={[ login, setLogin ]}>
            {children}
        </LoginContext.Provider>
    )
}

// Create Context for Registered Account
export const RegisteredContext = createContext();
export const RegisterProvider = ({children}) => {
    const [ registered, setRegistered] = useState(false);

    return (
        <RegisteredContext.Provider value={[ registered, setRegistered ]}>
            {children}
        </RegisteredContext.Provider>
    )
}