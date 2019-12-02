import { CHANGE_INPUT, CHANGE_SELECT, TABLE_CLICK, SEARCH } from '../constants/homeConstants';

const homeReducer = (state={
    inputValue: '',
	releaseDate: '',
	movieId: null,
	searchResponse: [],
}, {type, payload}) => {
    switch(type){
        case CHANGE_INPUT:
            return {
                ...state,
                inputValue: payload
            }
        case CHANGE_SELECT:
            return {
                ...state,
                releaseDate: payload
            }
        case TABLE_CLICK:
            return {
               ...state,
               movieId: payload
            }
        case SEARCH:
            return {
                ...state,
                searchResponse: payload
            }
        default:
            return state;                                                  
    }
}

export default homeReducer;