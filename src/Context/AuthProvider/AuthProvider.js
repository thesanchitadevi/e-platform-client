import React, { createContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    /* google signin */
   /*  const providerGoogleLogin = (provider) => {
        return signInWithPopup(auth,provider)
    } */


    /* email signin */
    const createUserEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const providerSignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
       
        createUserEmail,
        providerSignOut,
        logInUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;