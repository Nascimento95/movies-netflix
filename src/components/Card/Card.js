import { DivContainerCard, ImageCard, Title } from './Card.style';

function Card({image , title}) {
    console.log(image)
    return (
        <DivContainerCard>
            <ImageCard  img={image} />
            <Title>{title}</Title>
        </DivContainerCard>
    )
}

export default Card
