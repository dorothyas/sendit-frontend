import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'
const initialState = {
    isSuccessful: false,
    token: '',
    errors: null,
};


const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isSuccessful: true,
                token: action.payload
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isSuccessful: false,
                errors: action.payload
            };
        default:
            return state;
    }
}

export default signupReducer;