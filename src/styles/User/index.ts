import styled from 'styled-components';

export const UserContent = styled.div`
    background: radial-gradient(farthest-side at 50% 180%, var(--write), var(--blue));

    section {
        max-width: 1120px;
        height: 150px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        
        .contentName{
        display: flex;
        flex-direction: column;
        padding-left: 1rem;

        h2 {
            padding-top: 4rem;
            color: var(--write);
            font-weight: 400;
            }

            p{
                color: var(--write);
            }
        }

        img {
            margin-top: 2.5rem;
            border-radius: 50%;
            height: 84px;
            padding: 1rem;
        }

    }
`;