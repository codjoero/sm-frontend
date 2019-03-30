import React from 'react';
import { shallow } from 'enzyme';

import Routes from './index';

describe('routes test', () => {
    const wrapper = shallow(<Routes />);
    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
