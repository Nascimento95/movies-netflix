import { useEffect, useState } from "react"

// import getApi from '../../api/getApi'
import NavHome from '../../components/NavHome/NavHome';
import { DivNavAndButton, DivButton, DivMovies, TitlePage } from './AllFilm-style';
import Button from '../../components/Button/Button'
import Card from "../../components/Card/Card";
function AllFilm() {

    const [allFilms, setAllFilms] = useState(null)
    useEffect(() => {
        getFilm()
    }, [])
    const getFilm = async() => {
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
    
        if (response.status >= 400) {
            throw response.stautusText
        }
        const allFilm = await response.json()
        const data = setAllFilms(allFilm.results)
        return data
    };
    console.log(allFilms)
    if(allFilms === null) {
        return <p>Chargement...</p>
    }
    return (
        <div>
            <DivNavAndButton>
                <NavHome/>
                <DivButton>
                    <Button text="S'inscrire"/>
                    <Button text="okok"/>
                </DivButton>
            </DivNavAndButton>
            <DivMovies>
                <TitlePage> Movies</TitlePage>
                <Card image ="https://www.citizenkid.com/uploads/medias/3f/e8/3fe8d171352c23f83b338457bb8c4953e9efd743.jpeg" title="Aquaman"/>
                <Card />
            </DivMovies>
            {/* <h1>tous les films </h1> */}
            {/* {allFilms.map((film, index) => 
                <div key={`${film.title} ${index}`}>
                    <p>{film.title}</p>
                </div>
            )} */}
        </div>
    )
}

export default AllFilm
