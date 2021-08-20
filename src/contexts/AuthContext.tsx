import { createContext, ReactNode, useState } from "react";
import { supabase } from '../services/supabaseClient'

type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined,
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();


    async function signInWithGoogle() {

        const usuario = await supabase.auth.signIn({
            provider: 'google',
        });
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut();
    }

    return (
        <AuthContext.Provider value={{ signInWithGoogle, signOut, user }}>
            {props.children}
        </AuthContext.Provider>
    );

};