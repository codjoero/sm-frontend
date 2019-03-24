import { A_SIMPLE_ACTION } from './actionTypes';

const simpleAction = () => (dispatch) => {
    dispatch({
        type: A_SIMPLE_ACTION,
        payload: 'A call for simple stuff',
    });
};

export default simpleAction;
