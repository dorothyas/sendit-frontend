import React from 'react';

export const Parcel = props => {
    return (
        <div>
            <div>{props.order_id}</div>
            <div>{props.parcel_type}</div>
            <div>{props.pick_up}</div>
            <div>{props.destination}</div>
            <div>{props.receiver}</div>
            <div>{props.weight}</div>
            <div>{props.status}</div>
            <div>{props.present_location}</div>
        </div>
    );
};

export default Parcel;
