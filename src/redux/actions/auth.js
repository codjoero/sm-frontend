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

export const userLoginStarted = () => ({
    type: actionTypes.LOGIN_USER_START,
});

export const userLoginSucceded = data => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    data,
});

export const userLoginFailed = error => ({
    type: actionTypes.LOGIN_USER_FAIL,
    error,
});

export const loginUserAction = userInfo => async (dispatch) => {
    dispatch(userLoginStarted());
    const data = {};
    data.username = userInfo.username;
    data.password = userInfo.password;
    try {
        const response = await axios.post(`${actionTypes.BASE_URL}/login`, data);
        dispatch(userLoginSucceded(response.data));
        const { token, user: { username } } = response.data;
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    } catch (error) {
        dispatch(userLoginFailed(error.response.data));
    }
};
