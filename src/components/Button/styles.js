import  styled from 'styled-components'

export const ButtonStyled = styled.button`
    padding: 12px;
    background-color: beige;
    color: black;
    border: none;
    border-radius: 4px;
    margin-bottom: 15px;
    box-shadow: black 0px 3px 1px 0px;
    cursor: pointer;


    :active{
    box-shadow: 0px 0px 0px 0px, inset rgb(36, 36, 36) 0px 1px 1px 1px;
    transform: translateY(3px);
    }
`