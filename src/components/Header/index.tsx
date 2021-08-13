import { AiFillHome } from 'react-icons/Ai';
import { GoSignOut } from 'react-icons/Go';

import { Content } from '../../styles/Header';


export function Header() {
    return (
        <>
            <Content>
                <div>
                    <span><AiFillHome /></span>
                    <span><GoSignOut /></span>
                </div>
            </Content>
        </>
    );
}