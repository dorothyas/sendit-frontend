import React, { Component } from 'react';
import createparcelAction from '../../actions/createparcelAction';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';

class ParcelsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parcel_type: '',
            weight: '',
            receiver: '',
            pick_up: '',
            destination: '',
            loader: {
                loading: false
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.createparcelAction({
            parcel_type: this.state.parcel_type,
            pick_up: this.state.pick_up, destination: this.state.destination,
            receiver: this.state.receiver, weight: parseInt(this.state.weight)
        }, this.props);
        this.setState({ loader: { loading: true } });
    }
    render() {
        return (
            <React.Fragment>
                <a href="/logout">
                    <button className="logout btn">Log Out</button></a>
                <Loader {...this.state.loader} />
                    <div className="container" id="container">
                        <div className="form-container parcel-form-container">
                            <form action="#" className="parcel-form" onSubmit={this.onSubmit}>
                                <h1>Place Your Orders Here</h1>
                                <input type="text" name="parcel_type" value={this.state.parcel_type} placeholder="Parcel Type" onChange={this.onChange} required/>
                                <input type="number" name="weight" value={this.state.weight} placeholder="Weight of Parcel" onChange={this.onChange} required/>
                                <input type="text" name="receiver" value={this.state.receiver} placeholder="Receiver" onChange={this.onChange} required/>
                                <input type="text" name="pick_up" value={this.state.pick_up} placeholder="Pick up location" onChange={this.onChange} required/>
                                <input type="text" name="destination" value={this.state.destination} placeholder="destination" onChange={this.onChange} required/>
                                <button>Create</button>
                            </form>
                        </div>
                    </div>

            </React.Fragment>
        )
    }

};
export const mapStateToProps = state => ({
    createdata: state.createparcelsReducer.createdata,
    errors: state.createparcelsReducer.errors,
    is_created: state.createparcelsReducer.is_created,
});
export default connect(mapStateToProps, { createparcelAction })(ParcelsForm);
