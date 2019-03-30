import * as actionTypes from '../../actions/actionTypes';
import loginReducer from '../../reducers/loginReducer';

describe('loginReducer', () => {
    it('reducer should return intial state', () => {
        expect(loginReducer(undefined, {})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null,
            isAdmin: false,
            token: null,
        });
    });

    it('reducer should update state loading value', () => {
        expect(loginReducer(undefined,
            { type: actionTypes.LOGIN_USER_START })).toEqual({
            user: null,
            isAuthenticated: false,
            loading: true,
            error: null,
            isAdmin: false,
            token: null,
        });
    });

    it('reducer should update user, isAuthenticated state value', () => {
        expect(loginReducer(undefined,
            {
                type: actionTypes.LOGIN_USER_SUCCESS,
                data: { user: 'logged in success' },
            })).toEqual({
            user: 'logged in success',
            isAuthenticated: true,
            loading: false,
            error: null,
            isAdmin: false,
            token: undefined,
        });
    });

    it('reducer should update error state value', () => {
        expect(loginReducer(undefined,
            {
                type: actionTypes.LOGIN_USER_FAIL,
                error: { message: 'logged in failed' },
            })).toEqual({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: { message: 'logged in failed' },
            isAdmin: false,
            token: null,
        });
    });
});
