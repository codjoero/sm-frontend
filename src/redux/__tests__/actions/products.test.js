import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as actionTypes from '../../actions/actionTypes';
import { getAllProducts } from '../../actions/products';

describe('Products', () => {
    it('should return all products successfully', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({});
        axios.get.mockResolvedValue({ data: {} });
        const receivedActions = [
            { type: actionTypes.GET_ALL_PRODUCTS_START },
            { type: actionTypes.GET_ALL_PRODUCTS_SUCCESSED, data: {} },
        ];
        return store.dispatch(getAllProducts()).then(() => {
            expect(store.getActions()).toEqual(receivedActions);
        });
    });

    it('should return failure action', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({});
        axios.get.mockRejectedValue({ response: { data: {} } });
        const receivedActions = [
            { type: actionTypes.GET_ALL_PRODUCTS_START },
            { type: actionTypes.GET_ALL_PRODUCTS_FAIL, error: {} },
        ];
        return store.dispatch(getAllProducts()).then(() => {
            expect(store.getActions()).toEqual(receivedActions);
        });
    });
});
