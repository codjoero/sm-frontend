import axios from 'axios';
import * as actionTypes from './actionTypes';


export const getProductsStarted = () => ({
    type: actionTypes.GET_ALL_PRODUCTS_START,
});

export const getProductsSucceeded = data => ({
    type: actionTypes.GET_ALL_PRODUCTS_SUCCESSED,
    data,
});

export const getProductsFailed = error => ({
    type: actionTypes.GET_ALL_PRODUCTS_FAIL,
    error,
});

export const getAllProducts = () => async (dispatch) => {
    dispatch(getProductsStarted());
    try {
        const response = await axios.get(`${actionTypes.BASE_URL}/products`);
        dispatch(getProductsSucceeded(response.data));
    } catch (error) {
        dispatch(getProductsFailed(error.response.data));
    }
};
