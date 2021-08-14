import styled from 'styled-components'

export const ContentTask = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;

    section {
        display: flex;
        width: 100%;
        justify-content: space-between;
    
    div:first-child {
        
        input{
            border:#ddd solid 1px;
            border-radius: 5px;
            background-color: var(--gray-300);
            float:left;
            padding:5px 15px 5px 5px;
            margin-top: 2rem;
            margin-left: 2rem;
        }

        #lupa{
            float:left;
            margin:3px 0px 0px -20px;
            padding-top: 2.2rem;
            cursor:pointer
        }

        #lupa:after{
            font-size:2rem;
        }
    }

    div:last-child {
        margin-top: 2rem;

        span {
            font-size: 1.2rem;
            vertical-align:middle;
            margin-right: 0.5rem;
        }

        select {
            border:#ddd solid 1px;
            background-color: var(--gray-300);
            border-radius: 5px;
            padding:5px 15px 5px 5px;
            margin-right: 2rem;
        }
    }

}
`;