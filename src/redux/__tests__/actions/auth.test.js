import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as actionTypes from '../../actions/actionTypes';
import { registerUserAction } from '../../actions/auth';

describe('User registration', () => {
    const userInfo = {
        name: 'codjoe',
        username: 'codjoe',
        password: 'Treysongs1',
        role: 'admin',
    };
    it('should register a user sucessfully', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({});
        axios.post.mockResolvedValue({ data: {} });

        const returnedActions = [{ type: actionTypes.REGISTER_USER_STARTED },
            { type: actionTypes.REGISTER_USER_SUCCEEDED, data: {} }];
        return store.dispatch(registerUserAction({ userInfo })).then(() => {
            expect(store.getActions()).toEqual(returnedActions);
        });
    });

    it('tests user registration failed', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({});
        axios.post.mockRejectedValue({ response: { data: {} } });

        const returnedActions = [{ type: actionTypes.REGISTER_USER_STARTED },
            { type: actionTypes.REGISTER_USER_FAILED, error: {} }];

        return store.dispatch(registerUserAction({ userInfo })).then(() => {
            expect(store.getActions()).toEqual(returnedActions);
        });
    });
});
