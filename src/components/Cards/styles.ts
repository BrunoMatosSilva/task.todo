import styled from 'styled-components'

export const ContentCards = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1120px;
    padding: 1rem;
    margin: 0 auto;

    .bgTask {
        width: 100%;
        border-radius: 5px;

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: .5rem;

            button {
                background: transparent;
                border: none;
                vertical-align: middle;
                padding-left: .5rem;
            }
        }

        & + div {
                margin-top: 8px;
            }

            &.pending {
        background-color: var(--yellow);
    }

        &.completed {
            background-color: var(--green-300);
    }

    }

   

    .editButton {
        font-size: 1.8rem;
        color: var(--black);
    }

    .completedButton {
        font-size: 1.8rem;
        color: var(--green-700);
    }

    .cancelButton {
        font-size: 1.8rem;
        color: var(--red-700);
    }

    span {
        font-size: 1rem;
    }
`;