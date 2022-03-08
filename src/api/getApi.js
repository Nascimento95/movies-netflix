const getFilm = async(setState) => {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")

    if (response.status >= 400) {
        throw response.stautusText
    }
    const allFilm = await response.json()
    
    return setState(allFilm)
};

export default getFilm 
// const getFilm = async() => {
//     const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")

//     if (response.status >= 400) {
//         throw response.stautusText
//     }
//     const allFilm = await response.json()
//     const data = setAllFilms(allFilm.results)
//     return data
// };