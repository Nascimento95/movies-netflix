import  styled  from 'styled-components'

export const DivContainerCard = styled.div`
    width: 200px ;
    height: 320px ;
    /* background: rgba(0, 0, 0, 0.1); */
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    margin: 10px 50px 20px 0px;    
`

export const ImageCard = styled.img`
    width: 100% ;
    height:100% ;
    background-image: url(${(props) => props.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrL9GA-eM4UtBqCZg8jCtT22flSNcn1iq3hw&usqp=CAU"});
    background-size: cover ;
    background-repeat: no-repeat;
`

export const Title = styled.p`
    margin: 0px ;
    color: white ;
    
` 

