import styled from 'styled-components'

export const ContainerAll = styled.div`

`

export const DivNavAndButton = styled.div`
    border: 1px solid black ;
    display: flex ;
    align-items: center ;
    justify-content: space-between;
    background: rgba(0,0,0, 1) ;
`

export const DivButton = styled.div`
    
`
export const DivMovies = styled.div`
    margin:0px ;
    width:100% ;
    display: flex ;
    justify-content: center ;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.9);
`
export const TitlePage = styled.h1`
    margin: 0px;
    padding: 50px 0 0 20px ;
    color: white;
    font-size: 50px ;
`
export const DivTittle = styled.div`
    background: rgba(0, 0, 0, 0.9);
    padding-bottom: 50px ;
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    
`

export const ParaTitle = styled.p`
    color: white ;
    padding: 0 0 0 20px ;
`
export const DivHooverFavorite = styled.div`
    position: relative;
    bottom: 58px;
    width: 200px;
    height: 20px;
    background-color: rgba(10,10,10,0.79);
    display: flex;
    justify-content: center;
    align-items: center;
    /* visibility: hidden ; */
    &:hover{
        /* visibility: visible ; */
        position: relative;
        bottom: 58px;
        width: 200px;
        height: 20px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Input = styled.input`
    width: 400px ;
    height: 30px ;

`
