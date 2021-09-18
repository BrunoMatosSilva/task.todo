import styled from 'styled-components'

export const ContentTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1120px;
padding: 1rem;
margin: 0 auto;

border-bottom: 1px solid #E3E3E5;

@media only screen and (max-width:1024px) {
    margin-left: 1rem;
    margin-right: 1rem;
}
`;