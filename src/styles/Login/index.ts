import styled from 'styled-components'

export const Content = styled.div`
display: grid;
margin: 0 auto;

grid-template-columns: repeat(1, 1fr);
align-items: center;
justify-content: center;

    @media screen and (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        justify-content: center;

    }

    .bgBlue {
        background: radial-gradient(ellipse at bottom, var(--bg-write), var(--bg-blue));
        height: 25rem;

            @media screen and (max-width: 425px) {
                display: inline-block;
                background: radial-gradient(ellipse at bottom, var(--bg-write), var(--bg-blue));
                height: 10rem;
            }
    }

    .bgLogotipo {
        z-index: 999;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        img {
            height: 128px;
            margin-top: -15rem;

            @media screen and (max-width: 425px) {
                align-items: center;
                margin-top: -5rem;
            }
        }

        .contentLogo {
            display: flex;
            margin: 0 auto;
            display: flex;
            flex-direction: row;

            h1 {
                font-size: 3rem;
                font-weight: 400;
                color: black;
            }

            h1:last-child {
                font-size: 3rem;
                font-weight: 400;
                color: var(--bg-blue);
            }

            span {
                font-size: 3rem;
            }
        }

        p {
            font-size: 2rem;
            text-align: center;
            margin-top: 5rem;
            padding-top: 5rem;
            padding-bottom: 4rem;
            padding-left: 2.5rem;
            padding-right: 2.5rem;

            @media screen and (max-width: 425px) {
                max-width: 320px;
                font-size: 1.5rem;
                margin-top: 1rem;
            }
        }
    }

    button {
        margin: 0 auto;
        text-align: center;
        padding: .5rem;
        background: #FAFAFC;
        border: 1px solid #E3E3E5;
        border-radius: 5px;

        span {
            vertical-align: middle;
            margin-right: 1rem;

            img {
                margin-left: 1rem;
                margin-right: 1rem;
            }
        }
    }
`;