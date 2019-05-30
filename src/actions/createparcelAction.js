import { CREATE_PARCEL_FAIL, CREATE_PARCEL_SUCCESS } from '../actions/types';
import { toast } from "react-toastify";
import getparcelAction from "./getparcelAction"

const createparcelAction = (parceldata, props) => (dispatch) => {
    return fetch(
        `https://stargal-dorothy.herokuapp.com/api/v1/parcels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            },
            body: JSON.stringify(parceldata),
        })
        .then(response => response.json())
        .then((data) => {
            if (data.Message === "Missing data") {
                toast.success(`${data.Message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false
                });
                dispatch({
                    type: CREATE_PARCEL_FAIL,
                    payload: data.errors,
                });
            } else {
                toast.success(`${data.Message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false
                });
                dispatch({

                    type: CREATE_PARCEL_SUCCESS,
                    payload: data,

                });
                props.history.push('/parcel/' + data.id[0])
            }
        },
        ).catch(err => console.log(err)
        )
};

export default createparcelAction;
