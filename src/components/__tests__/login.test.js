import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

const props = {};
describe('Login component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Login {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
