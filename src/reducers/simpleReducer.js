import { A_SIMPLE_ACTION } from '../actions/actionTypes';

const initialState = {};

const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
    case A_SIMPLE_ACTION:
        return {
            ...state,
            data: action.payload,
        };
    default:
        return { ...state };
    }
};

export default simpleReducer;
