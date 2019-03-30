import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../Signup/SignupForm';

describe('SignupForm tests', () => {
    const wrapper = shallow(<SignupForm />);
    it('it should render without crushing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
