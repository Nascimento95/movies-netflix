import styled from "styled-components";

export const DropDownContainer = styled.div`
    width: ${(props) => props.larg || "100px"};
    height: 27px;
    border: 1px solid white;
    display: flex ;
    align-items:center ;
    justify-content: center ;
    background: #000000 ;
    cursor: pointer;
    
    p{
        color: white
    }
`

export const ContentDown = styled.div`
    width: ${(props) => props.larg || "100px"};
    position: absolute ;
    top:59px;
    border: 1px solid black;
    background: grey ;
    p:hover {
        background-color: #33C0FF;
        /* & p {
        } */
    }
    p{
        text-align: center ;
        margin: 0px ;
    }
`