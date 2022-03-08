import { ContainerDiv, DivNav, DivMovie } from './Favoris.style';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allMoviesData } from "../../redux/actions/fetchMovies";

import Button from '../../components/Button/Button'
import NavHome from '../../components/NavHome/NavHome';
import Card from '../../components/Card/Card';

function Favoris() {
    const favoriteMovies = useSelector((state => state.getAllMovies))
    const [favorisId , setFavorisId] = useState()
    const dispatch = useDispatch()
    console.log(favoriteMovies)
    useEffect(() => {
        if(favoriteMovies.movies.length === 0) {
            dispatch(allMoviesData())
            getStorage()
        }
    }, [])

    const getStorage = () => {
        const favorite = localStorage.getItem("idFilm")
        const array = JSON.parse(favorite)
        if (!array){
            array = []
        }
        return setFavorisId(array)
        // console.log("dd",array);
    }

    const filter = favoriteMovies.movies.filter((movie, index) => movie.id === favorisId[index])
    console.log(" le resulta de mon filter",filter)
    console.log(favorisId)
    return (
        <ContainerDiv>
            <DivNav>
                <NavHome/>
                <Button text="go Home"/>
            </DivNav>
            <DivMovie>
                {filter.map(film => 
                    <Card 
                    image={film.poster_path}  
                    title={film.title} 
                /> 
                )}
            </DivMovie>
        </ContainerDiv>
    )
}

export default Favoris
