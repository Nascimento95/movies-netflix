import {useParams} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button'
import NavHome from '../../components/NavHome/NavHome';
import {Container, DivImage, DivText, DivNav} from './FilmSelected.style'

function Filmselected() {
    
    let navigate = useNavigate()
    const [justOneMovie, setJustOneMovie] = useState(null)
    const oneMovies = useSelector((state => state.getAllMovies.movies))
    
    const {id} =useParams()
    useEffect(() => {
        if(justOneMovie === null){
            const filterArray = (array) => {
                const movieSelected = array.filter((movie) =>  movie.title === id)
                setJustOneMovie(movieSelected)
        
            }
            filterArray(oneMovies)
        }
    }, [id, justOneMovie, oneMovies])
    
    const goPageMovie = () => navigate("/allfilm")
    
    if(justOneMovie === null) {
        return <p> En chargement ...</p>
    }
    
    
    return (
        <>
            <DivNav>
                    <NavHome/>
            </DivNav>
            {justOneMovie.map(movie => 
                <Container key={movie.title} > 
                    <DivImage img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}>

                    </DivImage>
                    <DivText>
                        <p> <span> Titre :</span> {movie.title} </p> 
                        <p> <span> Synopsis :</span> {movie.overview} </p>
                        <Button 
                            goMovies={goPageMovie}
                            text="go home"
                            largeur="100%"
                            hauteur="20px"
                            marge="Opx"
                            
                        />
                    </DivText>
                </Container>
            
            )}
        </>
    )
}

export default Filmselected
