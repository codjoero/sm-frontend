import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import productsReducer from './productsReducer';

const reducerParts = {
    signup: signupReducer,
    login: loginReducer,
    products: productsReducer,
};

export default combineReducers(reducerParts);
