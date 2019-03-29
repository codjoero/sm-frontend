import React from 'react';
import { shallow } from 'enzyme';

import { Register, mapDispatchToProps, mapStateToProps } from '../SignupContainer';

describe('SignupContainer tests', () => {
    const currentState = {
        signup: {
            loading: false,
            registered: null,
            error: null,
        },
    };
    const props = {
        error: null,
        registerUser: jest.fn(),
        registered: null,
        passwordsDontMatch: false,
        inputHandler: jest.fn(),
    };

    const wrapper = shallow(<Register {...props} />);
    const wrapperInstance = wrapper.instance();

    it('should map state to props', () => {
        expect(mapStateToProps(currentState)).toEqual({ ...currentState.signup });
    });

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).registerUser();
        expect(dispatch.mock.calls.length).toBe(1);
    });

    it('should update name in state if value present', () => {
        const e = {
            target: {
                name: 'name',
                value: 'jonnie',
            },
            preventDefault: jest.fn(),
        };
        const { value } = e.target;
        const options = [];
        wrapperInstance.inputHandler(e, { value, options });
        expect(wrapperInstance.state.userInfo.name).toEqual('jonnie');
    });

    it('should update username in state if value present', () => {
        const e = {
            target: {
                name: 'username',
                value: 'jonnie',
            },
            preventDefault: jest.fn(),
        };
        const { value } = e.target;
        const options = [];
        wrapperInstance.inputHandler(e, { value, options });
        expect(wrapperInstance.state.userInfo.username).toEqual('jonnie');
    });

    it('should update role in state if value present', () => {
        const e = {
            target: {
                name: 'role',
                value: 'admin',
            },
            preventDefault: jest.fn(),
        };
        const { value } = e.target;
        const options = [];
        wrapperInstance.inputHandler(e, { value, options });
        expect(wrapperInstance.state.userInfo.role).toEqual('admin');
    });

    it('should update password in state if value present', () => {
        const e = {
            target: {
                name: 'password',
                value: 'Treysongs1',
            },
            preventDefault: jest.fn(),
        };
        const { value } = e.target;
        wrapperInstance.inputHandler(e, { value });
        expect(wrapperInstance.state.userInfo.password).toEqual('Treysongs1');
    });

    it('should update confirmPassword in state if value present', () => {
        const e = {
            target: {
                name: 'cPassword',
                value: 'Treysongs1',
            },
            preventDefault: jest.fn(),
        };
        const { value } = e.target;
        wrapperInstance.inputHandler(e, { value });
        expect(wrapperInstance.state.confirmPassword).toEqual('Treysongs1');
    });

    it('should update successColor in render method on successful registration', () => {
        wrapper.setProps({ registered: { message: 'successful' } });
        expect(wrapperInstance.successColor).toEqual('green');
    });

    it('should update formError in render method to true if passwords dont match', () => {
        wrapperInstance.setState({ passwordsDontMatch: true });
        expect(wrapperInstance.formError).toBeTruthy();
    });

    it('should update failedError in the render method if error is not null', () => {
        wrapper.setProps({ error: { message: "Sorry passwords don't match" } });
        expect(wrapperInstance.failedError).toEqual("Sorry passwords don't match");
    });

    it('should call the registerUser action if passwords match', () => {
        wrapperInstance.registerUserHandler();
        expect(props.registerUser).toHaveBeenCalled();
    });
});
