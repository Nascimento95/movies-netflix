import { ContainerDiv, DivNav, DivMovie } from './Favoris.style';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allMoviesData } from "../../redux/actions/fetchMovies";

import Button from '../../components/Button/Button'
import NavHome from '../../components/NavHome/NavHome';
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';

function Favoris() {
    let navigate = useNavigate()
    const favoriteMovies = useSelector((state => state.getAllMovies))
    const [favorisId , setFavorisId] = useState(null)
    const dispatch = useDispatch()
    console.log(favoriteMovies)
    useEffect(() => {
        if(favoriteMovies.movies.length === 0) {
            dispatch(allMoviesData())
            getStorage()
            filterMovie(favoriteMovies, favorisId)
        }
    }, [])

    const getStorage = () => {
        const favorite = localStorage.getItem("idFilm")
        const array = JSON.parse(favorite)
        if (!array){
            array = []
        }
        return setFavorisId(array)
    }
    
    const goHomePage = () => {
        navigate('/allfilm')
    }
    console.log(" mon state",favorisId )

    const filterMovie = (array1 , array2) => {
        return array1.movies.filter((movie, index) => movie.id === array2[index])
    }
    
    const filter = filterMovie(favoriteMovies , favorisId)
    
    console.log(" le resulta de mon filter",filter)
    console.log(favorisId)
    if ( favorisId === null ) {
        return <p> Chargement ...</p>
    }
    

    return (
        <ContainerDiv>
            <DivNav>
                <NavHome/>
                <Button 
                    goMovies={goHomePage}
                    text="go Home"
                />
            </DivNav>
            <DivMovie>
                {filter.map(film => 
                    <div key = {film.title}>
                        <Card 
                            image={film.poster_path}  
                            title={film.title} 
                        /> 
                    </div>
                )}
            </DivMovie>
        </ContainerDiv>
    )
}

export default Favoris
