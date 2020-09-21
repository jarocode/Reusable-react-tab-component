import CounterReducer from  './counter';
import LoggedReducer from './isLogged';
import {combineReducers} from 'redux';

const AllReducers = combineReducers({
    counter : CounterReducer,
    isLogged : LoggedReducer
});

export default AllReducers
