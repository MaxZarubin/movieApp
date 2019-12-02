import { CHANGE_INPUT, CHANGE_SELECT, TABLE_CLICK, SEARCH } from '../constants/homeConstants';
import { URL, API_KEY } from '../config/config';
import axios from 'axios';


const changeInput = event => dispatch => {
    dispatch({
        type: CHANGE_INPUT,
        payload: event.target.value
    });
    dispatch(search(event.target.value));
}

const clickDelete = () => dispatch => {
    dispatch({
        type: CHANGE_INPUT,
        payload: ''
    });
}

const changeSelect = (event,  releaseDate) => dispatch => {
    dispatch({
        type: CHANGE_SELECT,
        payload: event.target.value
    });
    dispatch(search(event.target.value, releaseDate));
}

const tableClick = event => dispatch => {
    dispatch({
        type: TABLE_CLICK,
        payload: event.target.closest('tr').id
    });
}

const search = (inputValue, releaseDate) => dispatch => {
    if(!inputValue){
        return null
    };      

    const queryString = `${URL}/search/movie?api_key=${API_KEY}&query=${inputValue}` 
        + (releaseDate ? `&primary_release_year=${releaseDate}` : '');

    axios.get(queryString).then(response => dispatch({
            type: SEARCH,
            payload: response
        }));    
}


export { changeInput, clickDelete, changeSelect, tableClick, search };