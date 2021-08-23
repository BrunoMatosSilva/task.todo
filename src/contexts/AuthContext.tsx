import { useState, useEffect, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import firebase from '../services/firebase';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signinGoogle = () => {
        try {
            setLoading(true);
            return firebase
                .auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then((response) => {
                    setUser(response.user);
                    Router.push('/task');
                });
        } finally {
            setLoading(false);
        }
    }

    const signout = async () => {
        try {
            Router.push('/');
            await firebase.auth().signOut();

        } finally {
            setLoading(false);
        }
    }

    /* useEffect(() => {
        const unsubscribe = firebase.auth().onIdTokenChanged({});
        return () => unsubscribe();
    }, []); */

    return (
        <AuthContext.Provider value={{ user, loading, signinGoogle, signout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;