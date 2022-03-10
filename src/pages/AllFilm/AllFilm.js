import { useEffect, useState } from "react"
import NavHome from '../../components/NavHome/NavHome';
import { DivNavAndButton, DivButton, DivMovies,DivTittle, TitlePage, ParaTitle, ContainerAll, DivHooverFavorite, Input } from './AllFilm-style';
import Button from '../../components/Button/Button'
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { allMoviesData } from "../../redux/actions/fetchMovies";
import { putFavorisFunc } from "../../redux/actions/favoris";
import {Link, useNavigate} from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

function AllFilm() {

    let navigate = useNavigate()

    const movies = useSelector((state => state.getAllMovies))

    const [filmFavoris, setFilmFavoris] = useState([])
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        if(movies.movies.length === 0) {
            dispatch(allMoviesData())
        }
        
    }, [dispatch, movies.movies.length, movies.movies.adult,])
    
    if(filmFavoris === 1) {
        dispatch(putFavorisFunc(filmFavoris))
    }

    if (movies.movies.length === 0) {
        return <p>Chargement...</p>
    }

    const storageFavorite = (id) =>{
        
        let arrayLocalStorage = JSON.parse(localStorage.getItem('idFilm'))
        const favoris = localStorage.getItem("idFilm")
        
        if(!favoris) {
            localStorage.setItem("idFilm",JSON.stringify([id]))
        }
        
        if(favoris &&  !arrayLocalStorage.includes(id)) {
            let arrayStorage = JSON.parse(favoris)
            arrayStorage.push(id)
            localStorage.setItem("idFilm",JSON.stringify(arrayStorage))
        }
        
        if( arrayLocalStorage !== null && arrayLocalStorage.includes(id)){
            let index = arrayLocalStorage.indexOf(id)
            arrayLocalStorage.splice(index,1)
            localStorage.setItem("idFilm",JSON.stringify(arrayLocalStorage))
        } 
    }

    const goFavoris = () => {
        navigate('/allfilm/favoris')
    }
    const deleteIdFavoris = (idfav, idmovie) => {
        let index = idfav.indexOf(idmovie)
        let newState = [...filmFavoris]
        if (idfav.includes(idmovie)){
            newState.splice(index,1)
            setFilmFavoris(newState)
        }
    }
    const handleSearch = (e) => {
        let value = e.target.value
        setSearch(value)
    }

    // let arrayLocalStorages = JSON.parse(localStorage.getItem('idFilm'))

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
                            {filmFavoris.includes(movie.id)  ? 
                            <p onClick={() => deleteIdFavoris(filmFavoris, movie.id)}><AiFillHeart style={{color:"white"}}/></p> 
                            : 
                            <p onClick={()=> { setFilmFavoris([...filmFavoris , movie.id])}}><AiOutlineHeart style={{color:"white"}}/></p> }
                        </DivHooverFavorite>
                    </div>
                )}
            </DivMovies>
        </ContainerAll>
    )
}

export default AllFilm
