import styled from 'styled-components'

export const ContentNewTask = styled.div`
    display: flex;
    align-items: center;
    max-width: 1120px;
    padding-top: 1rem;
    margin: 0 auto;

    button {
        margin: 0 auto;
        background: var(--blue);
        border: none;
        border-radius: 5px;
        color: var(--write);
        font-size: 1rem;
        width: 140px;
        height: 44px;
        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9)
        }

        span {
            padding-right: .5rem;
            
            img {
                width: 18px;
                vertical-align: middle;
                filter: invert(90%) brightness(100%) saturate(500%) contrast(500%);
            }
            

            @media screen and (max-width: 425px) {
            font-size: 1.5rem;
            padding-right: 1rem;
            vertical-align: middle;
            }
        }
    }
`;