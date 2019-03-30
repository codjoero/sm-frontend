import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../../Login/LoginForm';

describe('LoginForm tests', () => {
    const props = {
        invalidForm: true,
        errorMsg: '',
    };
    const wrapper = shallow(<LoginForm {...props} />);
    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with invalidForm false', () => {
        wrapper.setProps({ invalidForm: false });
        expect(wrapper).toMatchSnapshot();
    });
});
