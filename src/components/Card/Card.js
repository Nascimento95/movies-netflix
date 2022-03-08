import { DivContainerCard, ImageCard, Title, DivHooverFavorite } from './Card.style';

function Card({image , title}) {


    return (
        <DivContainerCard>
            <ImageCard  img={`https://image.tmdb.org/t/p/w300/${image}`} />
            <Title>{title}</Title>
        </DivContainerCard>
    )
}

export default Card
