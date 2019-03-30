import * as actionTypes from '../actions/actionTypes';

const intialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isAdmin: false,
    loading: false,
    error: null,
};

const loginReducer = (state = intialState, action) => {
    switch (action.type) {
    case actionTypes.LOGIN_USER_START:
        return {
            ...state,
            loading: true,
            isAuthenticated: false,
            isAdmin: false,
        };
    case actionTypes.LOGIN_USER_SUCCESS:
        return {
            ...state,
            user: action.data.user,
            token: action.data.token,
            isAuthenticated: true,
            isAdmin: action.data.user.role === 'admin',
            loading: false,
        };
    case actionTypes.LOGIN_USER_FAIL:
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    default:
        return state;
    }
};

export default loginReducer;
