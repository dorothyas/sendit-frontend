
import { GET_PARCEL_FAIL, GET_PARCEL_SUCCESS } from '../actions/types'
const initialState = {

    is_fetched: false,
    parcel: {},
    errors: null,

};


const getparcelReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PARCEL_SUCCESS:
            return {
                ...state,
                is_fetched: true,
                parcel: action.payload
            };
        case GET_PARCEL_FAIL:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}

export default getparcelReducer;