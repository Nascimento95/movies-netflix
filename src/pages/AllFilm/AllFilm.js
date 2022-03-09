import { useEffect, useState } from "react"
import NavHome from '../../components/NavHome/NavHome';
import { DivNavAndButton, DivButton, DivMovies,DivTittle, TitlePage, ParaTitle, ContainerAll, DivHooverFavorite, Input } from './AllFilm-style';
import Button from '../../components/Button/Button'
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { allMoviesData } from "../../redux/actions/fetchMovies";
import {Link, useNavigate} from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
function AllFilm() {

    let navigate = useNavigate()

    const movies = useSelector((state => state.getAllMovies))
    // const [favoriteToggle, setFavoriteToggle] = useState(false)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        if(movies.movies.length === 0) {
            dispatch(allMoviesData())
        }
    }, [dispatch, movies.movies.length])

    // const favorite = (film) =>{
    //     console.log("mon",film)
    //     film = !true
    //     // setFavoriteToggle(!favoriteToggle)
    // }

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
        
    }
    
    const goFavoris = () => {
        navigate('/allfilm/favoris')
    }

    const handleSearch = (e) => {
        let value = e.target.value
        setSearch(value)
    }
    console.log(movies.movies)
    return (
        <ContainerAll>
            <DivNavAndButton>
                <NavHome/>
                <DivButton>
                    <Button 
                        goMovies={goFavoris}
                        text="Favoris"
                    />
                    <Button text="S'inscrire"/>
                </DivButton>
            </DivNavAndButton>
            <DivTittle>
                <TitlePage> Movies</TitlePage>
                <ParaTitle>Voici tous les films disponnible sur netflix actuellement</ParaTitle>
                <Input
                    type="text"
                    placeholder="Rechercher"
                    onChange={handleSearch}
                />
                
                
            </DivTittle>
            <DivMovies>
                {movies.movies.filter((movie) =>{return movie.title.toLowerCase().includes(search.toLowerCase())} ).map((movie,index) =>
                    <div key={index}>
                        <Link style={{textDecoration:"none"}} to={`/allfilm/${movie.title}`} >
                            <Card 
                                    image={movie.poster_path}  
                                    title={movie.title} 
                                /> 
                        </Link> 
                        <DivHooverFavorite onClick={() => storageFavorite(movie.id) } >
                            {movie.adult? <p  onClick={()=> !movie.adult}><AiFillHeart style={{color:"white"}}/></p> : <p onClick={()=> movie.adult === console.log(!movie.adult,"le vrais",movie.adult)}><AiOutlineHeart style={{color:"white"}}/></p> }
                            {/* <p onClick={favorite}><AiOutlineHeart style={{color:"white"}}/></p> */}
                        </DivHooverFavorite>
                    </div>
                )}
            </DivMovies>
        </ContainerAll>
    )
}

export default AllFilm
