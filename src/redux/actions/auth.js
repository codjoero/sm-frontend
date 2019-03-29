import axios from 'axios';
import * as actionTypes from './actionTypes';

export const registerUserStarted = () => ({
    type: actionTypes.REGISTER_USER_STARTED,
});

export const registerUserSucceeded = data => ({
    type: actionTypes.REGISTER_USER_SUCCEEDED,
    data,
});

export const registerUserFailed = error => ({
    type: actionTypes.REGISTER_USER_FAILED,
    error,
});

export const registerUserAction = userInfo => async (dispatch) => {
    dispatch(registerUserStarted());
    const data = {};
    data.name = userInfo.name;
    data.username = userInfo.username;
    data.password = userInfo.password;
    data.role = userInfo.role;
    try {
        const response = await axios.post(`${actionTypes.BASE_URL}/register`, data);
        dispatch(registerUserSucceeded(response.data));
    } catch (error) {
        dispatch(registerUserFailed(error.response.data));
    }
};
