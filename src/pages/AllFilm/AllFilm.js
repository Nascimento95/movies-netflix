import { useEffect, useState } from "react"
import NavHome from '../../components/NavHome/NavHome';
import { DivNavAndButton, DivButton, DivMovies,DivTittle, TitlePage, ParaTitle, ContainerAll, DivHooverFavorite } from './AllFilm-style';
import Button from '../../components/Button/Button'
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { allMoviesData } from "../../redux/actions/fetchMovies";
import {Link} from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
function AllFilm() {
    const movies = useSelector((state => state.getAllMovies))
    // console.log("mon log de movie",movies)
    const [favoriteToggle, setFavoriteToggle] = useState(false)
    
    const dispatch = useDispatch()

    useEffect(() => {
        if(movies.movies.length === 0) {
            dispatch(allMoviesData())
        }
    }, [])

    const favorite = () =>{
        setFavoriteToggle(!favoriteToggle)
    }

    if (movies.movies.length === 0) {
        return <p>Chargement...</p>
    }
    const storageFavorite = (id) =>{
        
        const favoris = localStorage.getItem("idFilm")
        if(!favoris) {
            localStorage.setItem("idFilm",JSON.stringify([id]))

        } else {
            let arrayStorage = JSON.parse(favoris)
            arrayStorage.push(id)
            localStorage.setItem("idFilm",JSON.stringify(arrayStorage))
        }
        console.log(id)
    }
    console.log(movies)
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
                        <Link style={{textDecoration:"none"}} to={`/allfilm/${movie.title}`} >
                            <Card 
                                    image={movie.poster_path}  
                                    title={movie.title} 
                                /> 
                        </Link> 
                        <DivHooverFavorite onClick={() => storageFavorite(movie.id) } >
                            {favoriteToggle? <p  onClick={favorite}><AiFillHeart style={{color:"white"}}/></p> : <p onClick={favorite}><AiOutlineHeart style={{color:"white"}}/></p> }
                            {/* <p onClick={favorite}><AiOutlineHeart style={{color:"white"}}/></p> */}
                        </DivHooverFavorite>
                    </div>
                )}
            </DivMovies>
        </ContainerAll>
    )
}

export default AllFilm
