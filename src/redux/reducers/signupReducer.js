import * as actionTypes from '../actions/actionTypes';

const intialState = {
    registered: null,
    loading: false,
    error: '',
};

const signupReducer = (state = intialState, action) => {
    if (typeof action === 'undefined') {
        return state;
    }

    switch (action.type) {
    case actionTypes.REGISTER_USER_STARTED:
        return {
            ...state,
            registered: null,
            loading: true,
            error: null,
        };
    case actionTypes.REGISTER_USER_SUCCEEDED:
        return {
            ...state,
            loading: false,
            registered: action.data,
            error: null,
        };
    case actionTypes.REGISTER_USER_FAILED:
        return {
            ...state,
            loading: false,
            error: action.error,
            registered: null,
        };
    default:
        return state;
    }
};

export default signupReducer;
