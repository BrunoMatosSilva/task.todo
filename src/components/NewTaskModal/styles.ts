import styled from "styled-components";

export const ContainerModal = styled.form`
display: flex;
flex-direction: column;
    
    h2{
        color: var(--text);
        padding-bottom: 1rem;
    }

    label {
        color: var(--text);
        font-size: .8rem;
    }

    input {
        border: none;
        width: 100%;
        background-color: var(--gray-300);
        border-radius: 5px;
        height: 2rem;
        padding-left: 0.5rem;
        color: var(--black);
    }

    textarea {
        border: none;
        width: 100%;
        height: 4rem;
        background-color: var(--gray-300);
        border-radius: 5px;
        resize: none;
        padding-left: 0.5rem;
        color: var(--black);
    }

    div{
        margin-top: 1rem;
        vertical-align: middle;
    }

    button[type="submit"]{
        width: 100%;
        max-width: 200px;
        border: none;
        background-color: var(--green-300);
        border-radius: 5px;
        font-weight: 700;
        margin: 0 auto;
        margin-top: 1rem;
        height: 2.5rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.6);
        }
    }
`;