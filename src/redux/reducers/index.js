import { combineReducers } from 'redux';
import signupReducer from './signupReducer';

const reducerParts = {
    signup: signupReducer,
};

export default combineReducers(reducerParts);
