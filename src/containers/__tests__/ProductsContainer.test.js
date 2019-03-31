import React from 'react';
import { shallow } from 'enzyme';

import { Products, mapDispatchToProps, mapStateToProps } from '../ProductsContainer';

describe('Products tests', () => {
    const props = {
        products: null,
        getProducts: jest.fn(),
        isAuthenticated: false,
        error: null,
    };
    const currentState = {
        products: {
            products: null,
            loading: false,
        },
    };
    const wrapper = shallow(<Products {...props} />);
    const wrapperInstance = wrapper.instance();

    it('should return products if products prop is not null', () => {
        wrapper.setProps({
            products: {
                products: [
                    { prod_id: 1, prod_Name: 'Ny-jeans', category: 'denims' },
                    { prod_id: 2, prod_Name: 'Paris-heels', category: 'shoes' },
                ],
            },
        });
        expect(wrapperInstance.products).not.toBeNull();
    });

    it('should map state to props', () => {
        expect(mapStateToProps(currentState)).toEqual({ products: null, loading: false });
    });

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).getProducts();
        expect(dispatch.mock.calls.length).toBe(1);
    });
});
