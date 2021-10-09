import styled from "styled-components";


export const CardMain = styled.div`
    width: 125px;
    padding: 10px;
    height: 150px;
    background-color: darkcyan;
    color: white;
    border: white solid ;
    border-radius: 4px;
    margin: 5px 0px 5px 0px;

    @media screen and (min-width: 650px){

        width: 200px;
        height: 250px;
        margin: 0 5px 0 5px;
    }
`

export const Sec = styled.section`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 650px){
        flex-direction: row;
    }


`