import loginReducer from '../reducers/loginReducer';
import signupReducer from '../reducers/signupReducer';
import createparcelsReducers from '../reducers/createparcelReducer'
import {
    LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, CREATE_PARCEL_FAIL, CREATE_PARCEL_SUCCESS
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

    it('should update state if there is LOGIN_FAIL', () => {
        expect(loginReducer([], { type: LOGIN_FAIL, errors: '' })).toEqual({
            errors: undefined
        });

    });
    it('should return initial state', () => {
        expect(signupReducer(undefined, {})).toEqual(
            {

                isSuccessful: false,
                token: '',
                errors: null

            }
        );
    }
    )
    it('should update the REGISTER_SUCCESS', () => {
        expect(signupReducer([], { type: REGISTER_SUCCESS, token: '' })).toEqual({
            isSuccessful: true,
            token: undefined,
        });

    })
    it('should update state if there is REGISTER_FAIL', () => {
        expect(signupReducer([], { type: REGISTER_FAIL, errors: '' })).toEqual({
            isSuccessful: false,
            errors: undefined,
        });
    })

    it('should return initial state', () => {
        expect(createparcelsReducers(undefined, {})).toEqual(
            {

                is_created: false,
                createdata: '',
                errors: null,

            }
        );
    }
    )
    it('should update the CREATE_PARCEL_SUCCESS', () => {
        expect(createparcelsReducers([], { type: CREATE_PARCEL_SUCCESS, createdata: '' })).toEqual({
            is_created: true,
            createdata: undefined,
        });

    })
    it('should update state if there is CREATE_PARCEL_FAILURE', () => {
        expect(createparcelsReducers([], { type: CREATE_PARCEL_FAIL, errors: '' })).toEqual({
            errors: undefined,
        });
    })
}
);
// it('should return initial state', () => {
//     expect(getallparcelsReducers(undefined, {})).toEqual(
//         {

//             isSuccessfully_retrived: false,
//             parcels: [],
//             errors: null,
//         }
//     );
// }
// )
// it('should update the GET_PARCEL_SUCCESS', () => {
//     expect(getallparcelsReducers([], { type: GETPARCELS_PARCEL_SUCCESS, parcels: [] })).toEqual({
//         isSuccessfully_retrived: true,
//         parcels: undefined,
//     });

// })
// it('should update state if there is GET_PARCEL_FAILURE', () => {
//     expect(getallparcelsReducers([], { type: GETPARCELS_PARCEL_FAILURE, errors: '' })).toEqual({
//         errors: undefined,
//     });
// })
