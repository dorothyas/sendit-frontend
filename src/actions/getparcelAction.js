import { GET_PARCEL_SUCCESS, GET_PARCEL_FAIL } from './types'


const getparcelAction = (order_id) => (dispatch) => {

    return fetch(`https://stargal-dorothy.herokuapp.com/api/v1/parcels/${order_id}`
        , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            },
        })
        .then(res => res.json())
        .then((data) => {
                if (data.errors) {
                    dispatch({
                        type: GET_PARCEL_FAIL,
                        payload: data.errors,
                    });
                } else {
                    dispatch({

                        type: GET_PARCEL_SUCCESS,
                        payload: data.Orders[0],

                    });

                }
            },
        )
};

export default getparcelAction;
