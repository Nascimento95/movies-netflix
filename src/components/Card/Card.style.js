import  styled  from 'styled-components'

export const DivContainerCard = styled.div`
    width: 320px ;
    height: 200px ;
    background: black;
    display: flex ;
    flex-direction: column ;
    align-items: center ;
`

export const ImageCard = styled.img`
    width: 100% ;
    height:100% ;
    background-image: url(${(props) => props.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrL9GA-eM4UtBqCZg8jCtT22flSNcn1iq3hw&usqp=CAU"}) ;
    background-size: cover ;
`

export const Title = styled.p`
    margin: 0px ;
    color: white ;
    
` 
