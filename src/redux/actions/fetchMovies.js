export const allMoviesData = () => dispatch => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(response => response.json())
        .then(data => {
            dispatch({
                type : 'GETMOVIES',
                payload : data.results
            })
        })

}