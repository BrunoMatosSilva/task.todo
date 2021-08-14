import { AiFillHome } from 'react-icons/Ai';
import { GoSignOut } from 'react-icons/Go';

import { HeaderContent } from '../../styles/Header';


export function Header() {
    return (
        <>
            <HeaderContent>
                <div>
                    <button><AiFillHome /></button>
                    <button><GoSignOut /></button>
                </div>
            </HeaderContent>
        </>
    );
}