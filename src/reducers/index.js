import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';

const reducerParts = {
    simpleReducer,
};

export default combineReducers(reducerParts);
