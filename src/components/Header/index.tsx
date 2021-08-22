import { GoSignOut } from 'react-icons/Go';
import { supabase } from '../../services/supabaseClient';

import { HeaderContent } from './styles';


export function Header() {

    async function Logout() {
        await supabase.auth.signOut();
    }

    return (
        <>
            <HeaderContent>
                <div>
                    <span><img src="/logo_small.svg" /></span>
                    <button onClick={Logout}><GoSignOut /></button>
                </div>
            </HeaderContent>
        </>
    );
}