
import React,
{
  createContext,
  useEffect,
  useState
} from 'react'

import {
  getAuth, onAuthStateChanged,
} from 'firebase/auth'

import Firebase from './firebase.jsx'

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {

  const auth = getAuth(Firebase);

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        setUser(user);
      }
      else {
        setIsLogged(false);
        setUser(user);
      }
    });
    console.log('console effect', user);
    return unsubscribe;

  }, [user])

  const value = {
    auth,
    user,
    isLogged,
  }

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  )



}
