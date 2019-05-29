import loginReducer from '../reducers/loginReducer'
import {
    LOGIN_SUCCESS, LOGIN_FAIL
} from '../actions/types'


describe('logins a user', () => {
    it('should return initial state', () => {
        expect(loginReducer(undefined, {})).toEqual(
            {

                isSuccessful: false,
                token: '',
                errors: null,


            }
        );
    }
    )

    it('should update the LOGIN_SUCCESS', () => {
        expect(loginReducer([], { type: LOGIN_SUCCESS, token: '' })).toEqual({
            isSuccessful: true,
            token: undefined,
        });
    })
}
);
it('should update state if there is LOGIN_FAILURE', () => {
    expect(loginReducer([], { type: LOGIN_FAIL, errors: '' })).toEqual({
        errors: undefined,
    });

});
