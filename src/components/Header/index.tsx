import { GoSignOut } from 'react-icons/Go';

import { HeaderContent } from './styles';


export function Header() {
    return (
        <>
            <HeaderContent>
                <div>
                    <span><img src="/logo_small.svg" /></span>
                    <button><GoSignOut /></button>
                </div>
            </HeaderContent>
        </>
    );
}