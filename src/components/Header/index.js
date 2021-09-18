import { GoSignOut } from 'react-icons/Go';
import Link from 'next/link';

import { HeaderContent } from './styles';
import { auth } from '../../services/firebase';

async function signOutWithGoogle() {
    await auth.signOut();
}

export function Header() {

    return (
        <>
            <HeaderContent>
                <div>
                    <span><img src="/logo_small.svg" /></span>
                    <Link href="/">
                        <button onClick={signOutWithGoogle}><GoSignOut /></button>
                    </Link>
                </div>
            </HeaderContent>
        </>
    );
}