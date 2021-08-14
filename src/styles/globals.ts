import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --write: #FFFFFF;
        --blue: #4285F4;
        --gray: #969CB3;
        --gray-300: #E9E7E7;
        --text: #585454;
        --button: #F4EF88;
    }

    @media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}

@media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: var(--write);
        height: calc(100vh - 52px);
    }
    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        color: var(--text);
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        color: var(--text);
    }

    a {
        text-decoration: none;
        color: var(--text);
    }

    button {
        cursor: pointer;
    }
    `;

