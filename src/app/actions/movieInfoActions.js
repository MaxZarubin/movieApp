import { GET_MOVIE, GET_DIRECTOR, GET_CAST } from '../constants/movieInfoConstants';
import { URL, API_KEY } from '../config/config';
import axios from 'axios';


const getMovie = id => dispatch => {
    const queryString = `${URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`;	

    axios.get(queryString).then(response => {
        dispatch({
            type: GET_MOVIE,
            payload: response.data
        })
        return response.data;
    }).then(response => {
        dispatch({
            type: GET_DIRECTOR,
            payload: response.credits.crew[0].name
        })
        return response;
    }).then(response => {
        dispatch({
            type: GET_CAST,
            payload: response.credits.cast
        })
    });
};

export { getMovie };