import * as actionTypes from '../../actions/actionTypes';
import signupReducer from '../../reducers/signupReducer';

describe('Signup reducer', () => {
    const intialState = {
        registered: null,
        loading: false,
        error: '',
    };
    it('should return default state', () => {
        expect(signupReducer(undefined, {})).toEqual(intialState);
    });

    it('should return default state on undefined action', () => {
        expect(signupReducer(undefined, { type: undefined })).toEqual(intialState);
    });

    it('should update loading with _STARTED action type', () => {
        const reducer = signupReducer(undefined, { type: actionTypes.REGISTER_USER_STARTED });
        expect(reducer).toEqual({
            registered: null,
            loading: true,
            error: null,
        });
    });

    it('should update register value on success', () => {
        const reducer = signupReducer(undefined,
            { type: actionTypes.REGISTER_USER_SUCCEEDED, data: { msg: 'lovely' } });
        expect(reducer).toEqual({
            registered: { msg: 'lovely' },
            loading: false,
            error: null,
        });
    });

    it('should update error value in register state', () => {
        const reducer = signupReducer(undefined,
            { type: actionTypes.REGISTER_USER_FAILED, error: { msg: 'user already registered' } });
        expect(reducer).toEqual({
            registered: null,
            loading: false,
            error: { msg: 'user already registered' },
        });
    });
});
