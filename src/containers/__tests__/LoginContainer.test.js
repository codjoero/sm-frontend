import React from 'react';
import { shallow } from 'enzyme';

import { LoginContainer, mapDispatchToProps, mapStateToProps } from '../LoginContainer';

describe('LoginContainer tests', () => {
    const currentState = {
        login: {
            isAuthenticated: false,
            loading: false,
            error: null,
        },
    };
    const props = {
        isAuthenticated: false,
        userLoginDispatch: jest.fn(),
        error: '',
    };
    const wrapper = shallow(<LoginContainer {...props} />);
    const wrapperInstance = wrapper.instance();

    it('should map state to props', () => {
        expect(mapStateToProps(currentState)).toEqual({ ...currentState.login });
    });

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).userLoginDispatch();
        expect(dispatch.mock.calls.length).toBe(1);
    });

    it('should update username in state if value present', () => {
        const e = {
            target: {
                name: 'username',
                value: 'admin',
            },
            preventDefault: jest.fn(),
        };
        wrapperInstance.loginHandler(e);
        expect(wrapperInstance.state.loginInfo.username).toEqual('admin');
    });

    it('should update password in state if value present', () => {
        const e = {
            target: {
                name: 'password',
                value: 'Treysongs1',
            },
            preventDefault: jest.fn(),
        };
        wrapperInstance.loginHandler(e);
        expect(wrapperInstance.state.loginInfo.password).toEqual('Treysongs1');
    });

    it('should redirect user if isAuthenticated', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapperInstance.redirectHome).not.toBeNull();
    });

    it('should login user if submitDataHandler is called', () => {
        wrapper.setProps({ userLoginDispatch: () => {} });
        wrapperInstance.submitHandler();
        expect(wrapperInstance.redirectHome).not.toBeNull();
    });
});
