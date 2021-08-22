import { GoSignOut } from 'react-icons/Go';
import Link from 'next/link';
import { supabase } from '../../services/supabaseClient';

import { HeaderContent } from './styles';


export function Header() {

    return (
        <>
            <HeaderContent>
                <div>
                    <span><img src="/logo_small.svg" /></span>
                    <Link href="/">
                        <button><GoSignOut /></button>
                    </Link>
                </div>
            </HeaderContent>
        </>
    );
}