import React, { useContext, useState } from 'react';
import jwt from 'jsonwebtoken';


const userAPI = 'https://gathering.azurewebsites.net/api/User';
export const AuthContext = React.createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error("You are missing AuthProvider!");
    return auth;
}

export function AuthProvider(props) {
    const [state, setState] = useState({
        user: null,
        login,
        logout,
        register
    })

    function setUser(user) {
        user = processToken(user);

        setState(prevState => ({
            ...prevState,
            user,
        }));

        return !!user;
    }

    async function login(username, password) {
        const result = await fetch(`${userAPI}/Login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
        });

        const resultBody = await result.json();

        if (result.ok) {
            setUser(processToken(resultBody));
            return true;
        }

        logout();
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )

    async function register(FirstName, LastName, Username, Password, Email, PhoneNumber, BirthDate) {
        await fetch(`${userAPI}/Register`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ FirstName, LastName, Username, Password, Email, PhoneNumber, BirthDate }),
        });

        await login(Username, Password);

    }
}

function processToken(user) {
    if (!user)
        return null;

    try {
        const payload = jwt.decode(user.token);
        console.log(payload);
        if (payload) {
            user.permissions = payload.permissions || [];
            return user;
        }

        return null;
    }
    catch (e) {
        console.warn(e);
        return null;
    }
}
