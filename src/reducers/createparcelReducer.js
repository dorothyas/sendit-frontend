import { CREATE_PARCEL_FAIL, CREATE_PARCEL_SUCCESS } from '../actions/types'
const initialState = {

    is_created: false,
    createdata: '',
    errors: null,

};


const createparcelsReducers = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PARCEL_SUCCESS:
            return {
                ...state,
                is_created: true,
                createdata: action.payload
            };
        case CREATE_PARCEL_FAIL:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}

export default createparcelsReducers;