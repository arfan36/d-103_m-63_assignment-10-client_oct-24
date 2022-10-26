import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const ProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const authInfo = {
        loading,
        setLoading,
        ProviderLogin
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;