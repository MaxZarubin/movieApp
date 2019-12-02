import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import movieInfoReducer from './movieInfoReducer';

const allReducers = combineReducers({home: homeReducer, info: movieInfoReducer});

export default allReducers;