import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import getparcelAction from '../../actions/getparcelAction';

class GetParcelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parcel_type: "",
            weight: 0,
            receiver: '',
            pick_up: '',
            destination: '',
            status: 'pending',
            present_location: ''

        };
    }

    componentWillReceiveProps(newProps) {
        const { parcel } = newProps
        this.setState({
            parcel_type: parcel.parcel_type,
            wight: parcel.weight,
            receiver: parcel.receiver,
            pick_up: parcel.pick_up,
            destination: parcel.destination,
            status: parcel.status,
            present_location: parcel.present_location
        })

    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getparcelAction(id);
    }

    render() {
        return (
            <div className="content mt-4">
                <div className="orders">
                    <div>
                        <h1>{this.state.parcel_type}</h1>
                        <br />
                        <p>Weight:{this.state.weight} </p>
                        <p>pick-up: {this.state.pick_up} </p>
                        <p>receiver: {this.state.receiver} </p>
                        <p>destination: {this.state.destination} </p>
                        <p>status: {this.state.status} </p>
                        <p>present_location: {this.state.present_location} </p>
                    </div>
                </div>
            </div >
        )
    }
}
export const mapStateToProps = state => ({
    is_fetched: state.getparcelReducer.is_fetched,
    parcel: state.getparcelReducer.parcel,
    errors: state.getparcelReducer.errors

});

export default
    withRouter(connect(
        mapStateToProps,
        { getparcelAction }
    )(GetParcelComponent))
