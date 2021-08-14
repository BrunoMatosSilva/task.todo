import styled from 'styled-components';

export const HeaderContent = styled.div`
    background-color: var(--blue);

    div{
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        background-color: var(--blue);

        button {
            font-size: 2.5rem;
            padding-top: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            background: transparent;
            border: none;
            color: var(--write);
        }
    }
`;