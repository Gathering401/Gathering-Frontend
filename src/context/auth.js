// taken from https://github.com/DeltaVCode/cr-dotnet-401d2/blob/master/Class39/Demo/my-first-react-app/src/contexts/auth.js
// Written by Keith Dahlby

import React, { useContext, useCallback, useMemo, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
const cookieName = 'auth';

const usersAPI = 'https://gathering.azurewebsites.net/api/User';

export const AuthContext = React.createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('You are missing AuthProvider!');
  return auth;
}
export default useAuth;

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(`Checking for ${cookieName} cookie`);
    const cookieToken = cookie.load(cookieName);
    const cookieUser = processToken(cookieToken);
    setUser(cookieUser);
  }, []);

  const login = useCallback(async function login(username, password) {
    const result = await fetch(`${usersAPI}/Login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const resultBody = await result.json();

    if (result.ok) {
      let user = processToken(resultBody.token);
      console.log('setting user from token', user);
      setUser(user);
      return !!user;
    }

    // TODO: add an error to show about invalid username/password
    logout();
    return false;
  }, []);

  function logout() {
    setUser(null)
    cookie.remove(cookieName, { path: '/' });
  }

  const hasPermission = useCallback(function hasPermission(permission) {
    return user?.permissions.includes(permission);
  }, [user]);

  const state = useMemo(() => ({
    user,
    timestamp: new Date(),

    login,
    logout,
    hasPermission,
  }), [user, login, hasPermission])

  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  )
}

function processToken(token) {
  if (!token)
    return null;

  try {
    const payload = jwt.decode(token);
    if (payload){
      // Token looks legit, so let's save it
      cookie.save(cookieName, token, { path: '/' });

      return {
        id: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
        username: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        userId: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
        permissions: payload.permissions || [],
        token,
      }
    }

    return null;
  }
  catch (e) {
    console.warn(e);
    return null;
  }
}