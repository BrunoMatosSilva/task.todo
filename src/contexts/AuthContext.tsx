import { createContext, ReactNode } from "react";
import { supabase } from '../services/supabaseClient'

type AuthContextType = {
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {

    async function signInWithGoogle() {
        const { user, session, error } = await supabase.auth.signIn({
            provider: 'google',
        }, {
            redirectTo: 'http://localhost:3000/task'
        });
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut();
    }

    return (
        <AuthContext.Provider value={{ signInWithGoogle, signOut }}>
            {props.children}
        </AuthContext.Provider>
    );

};