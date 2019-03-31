import * as actionTypes from '../../actions/actionTypes';
import productReducer from '../../reducers/productsReducer';

describe('Products Reducer tests', () => {
    it('should return intial state', () => {
        expect(productReducer(undefined, {})).toEqual({
            products: null,
            error: null,
            loading: false,
        });
    });

    it('should update products value in state', () => {
        const action = { type: actionTypes.GET_ALL_PRODUCTS_SUCCESSED, data: { products: ['Ny-Jeans', 'bell-bottom'] } };
        expect(productReducer(undefined, action)).toEqual({
            products: { products: ['Ny-Jeans', 'bell-bottom'] },
            loading: false,
            error: null,
        });
    });

    it('should update loading value in state', () => {
        const action = { type: actionTypes.GET_ALL_PRODUCTS_START };
        expect(productReducer(undefined, action)).toEqual({
            products: null,
            error: null,
            loading: true,
        });
    });

    it('should update error value in state', () => {
        const action = { type: actionTypes.GET_ALL_PRODUCTS_FAIL, error: { message: 'no products' } };
        expect(productReducer(undefined, action)).toEqual({
            products: null,
            error: { message: 'no products' },
            loading: false,
        });
    });
});
