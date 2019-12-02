import { GET_MOVIE, GET_DIRECTOR, GET_CAST } from '../constants/movieInfoConstants';

const movieInfoReducer = (state={
    getMovieResponse: [],
    director: '',
    cast: []
}, {type, payload}) => {
    switch(type){
        case GET_MOVIE :
            return {
                ...state,
                getMovieResponse: payload
            }
        case GET_DIRECTOR :
            return {
                ...state,
                director: payload
            }
        case GET_CAST :
            return {
                ...state,
                cast: payload
            } 
        default:
            return state;                            
    }
}

export default movieInfoReducer;