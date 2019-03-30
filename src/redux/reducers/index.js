import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

const reducerParts = {
    signup: signupReducer,
    login: loginReducer,
};

export default combineReducers(reducerParts);
