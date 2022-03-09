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
    const [favorisId , setFavorisId] = useState([])
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(favoriteMovies.movies.length === 0) {
            dispatch(allMoviesData())
        }
        
    }, [dispatch, favoriteMovies.movies.length])
    
    useEffect(() => {
        getStorage()
    
    }, [])

    const getStorage = () => {
        const favorite = localStorage.getItem("idFilm")
        let array = JSON.parse(favorite)
        if (!array){
            array = []
        }
        return setFavorisId(array)
    }
    
    const goHomePage = () => {
        navigate('/allfilm')
    }
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
                {favoriteMovies.movies.filter((movie) => favorisId.includes(movie.id))
                .map(movie =>
                    <div key = {movie.title}>
                        <Card 
                            image={movie.poster_path}  
                            title={movie.title} 
                        /> 
                    </div>
                )}
            </DivMovie>
        </ContainerDiv>
    )
}

export default Favoris
