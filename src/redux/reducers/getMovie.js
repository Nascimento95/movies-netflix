const INITIAL_STATE = {
    movies : []
}

const getAllMovies = ( state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'GETMOVIES':
            
            return {...state, movies: action.payload}
        default:
            return state
    }
}

export default getAllMovies