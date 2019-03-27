import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';

const props = {};
describe('Dashboard component', () => {
    const wrapper = shallow(<Dashboard />);
    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
