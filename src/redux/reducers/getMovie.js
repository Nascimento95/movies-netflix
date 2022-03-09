const INITIAL_STATE = {
    movies : [],
    favoris:[]
}

const getAllMovies = ( state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'GETMOVIES':
            
            return {...state, movies: action.payload}
        case'PUTFAVORIS' : 
            console.log('je suis dans la conddi reducer')
            return { ...state, favoris: action.payload}
        default:
            return state
    }
}

export default getAllMovies