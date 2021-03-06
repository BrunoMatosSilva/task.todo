import styled from 'styled-components';

export const HeaderContent = styled.div`
    background-color: var(--blue);

    div{
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        background-color: var(--blue);

        span {
            padding-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;  
        }

        button {
            font-size: 2.5rem;
            padding-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            background: transparent;
            border: none;
            color: var(--write);
            transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9)
        }

            img {
                width: 36px;
                filter: invert(90%) brightness(100%) saturate(500%) contrast(500%);
            }
        }
    }
`;