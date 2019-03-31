import * as actionTypes from '../actions/actionTypes';

const currentState = {
    products: null,
    loading: false,
    error: null,
};

export const productReducer = (state = currentState, action) => {
    switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS_START:
        return {
            ...state,
            products: null,
            error: null,
            loading: true,
        };
    case actionTypes.GET_ALL_PRODUCTS_SUCCESSED:
        return {
            ...state,
            products: action.data,
            error: null,
            loading: false,
        };
    case actionTypes.GET_ALL_PRODUCTS_FAIL:
        return {
            ...state,
            products: null,
            error: action.error,
            loading: false,
        };
    default:
        return state;
    }
};

export default productReducer;
