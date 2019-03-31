import React from 'react';
import { shallow } from 'enzyme';
import { Layout, mapStateToProps, mapDispatchToProps } from '../Layout';

describe('Layout tests', () => {
    const props = {
        userLogoutDispatch: jest.fn(),
    };
    const e = {};
    const State = {
        login: {
            isAuthenticated: true,
        },
    };
    const wrapper = shallow(<Layout {...props} />);
    const wrapperInstance = wrapper.instance();

    it('should call handleItemClick functions', () => {
        wrapperInstance.handleClick(e, { name: 'logout' });
        expect(wrapperInstance.state.activeItem).toEqual('logout');
    });

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).userLogoutDispatch();
        expect(dispatch.mock.calls.length).toBe(1);
    });

    it('should map state to props', () => {
        expect(mapStateToProps(State)).toEqual({ isAuthenticated: true });
    });
});
