import { useEffect } from "react"
import NavHome from '../../components/NavHome/NavHome';
import { DivNavAndButton, DivButton, DivMovies,DivTittle, TitlePage, ParaTitle, ContainerAll } from './AllFilm-style';
import Button from '../../components/Button/Button'
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { allMoviesData } from "../../redux/actions/fetchMovies";
import {Link} from 'react-router-dom'

function AllFilm() {
    const movies = useSelector((state => state.getAllMovies))
    // console.log("mon log de movie",movies)

    const dispatch = useDispatch()

    useEffect(() => {
        if(movies.movies.length === 0) {
            dispatch(allMoviesData())
        }
    }, [])

    if (movies.movies.length === 0) {
        return <p>Chargement...</p>
    }

    return (
        <ContainerAll>
            <DivNavAndButton>
                <NavHome/>
                <DivButton>
                    <Button text="S'inscrire"/>
                </DivButton>
            </DivNavAndButton>
            <DivTittle>
                <TitlePage> Movies</TitlePage>
                <ParaTitle>Voici tous les films disponnible sur netflix actuellement</ParaTitle>
            </DivTittle>
            <DivMovies>
                {movies.movies.map((movie,index) =>
                    <div key={index}>
                        <Link to={`/allfilm/${movie.title}`} >
                            <Card 
                                    image={movie.poster_path}  
                                    title={movie.title} 
                                /> 
                        </Link> 
                    </div>
                )}
            </DivMovies>
        </ContainerAll>
    )
}

export default AllFilm
