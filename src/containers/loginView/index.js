import React, { Component } from 'react';
import { connect } from 'react-redux'
import loginAction from '../../actions/loginAction';
import Loader from '../../components/Loader';
import Login from '../../components/LoginComponent';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
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
        this.props.loginAction({ user_name: this.state.username, user_password: this.state.password }, this.props)
        this.setState({ loader: { loading: true } });

    }
    componentWillReceiveProps(newProps) {
        if (newProps.isSuccessful === true) {
            this.props.history.push("/parcels")
        } else {
            this.setState({ loader: { loading: false } });
        }
    }
    render() {
        return (
            <div>
                <Loader {...this.state.loader} />
                <Login
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    username={this.state.username}
                    password={this.state.password}
                />
            </div>
        )
    }
}


export const mapStateToProps = state => ({
errors: state.loginReducer.errors,
    isSuccessful: state.loginReducer.isSuccessful,
});

export default connect(mapStateToProps, { loginAction })(LoginView);
