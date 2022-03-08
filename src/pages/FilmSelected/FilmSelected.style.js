import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:90vh ;
    border: 1px solid black ;
    background: rgba(0, 0, 0, 0.9);
    display: flex ;
    flex-direction: column ;
    /* justify-content: center ; */
    align-items: center ;
`

export const DivImage = styled.div`
    margin-top: 20px ;
    width: 200px;
    height:300px;
    background: url( ${props => props.img});
    background-size: cover ;
`

export const DivText = styled.div`
    width: 400px;
    height:50px;
    color: white ;
    span{
        color: rgba(245, 0, 0, 0.8)
    }
`
export const DivNav = styled.div`
    height: 70px;
    background: rgba(0,0,0) ;
`