import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import loginuser from '../actions/loginActions'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <div>
                    <div className="container" id="container">
                        <div className="form-container sign-up-container">
                            <form action="#" className="login-form">
                                <h1>Welcome Back!</h1>
                                <h2>Sign In</h2>
                                <input type="text" placeholder="Name" />
                                <input type="password" placeholder="Password" />
                                <button>Sign in</button>
                                <br />
                                <div><Link to='/register' className="link">Don't Have an account? SignUp here.</Link></div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}


export const mapStateToProps = state => ({
    token: state.loginReducers.token,
    errors: state.loginReducers.errors,
    isSuccessful: state.loginReducers.isSuccessful,
    isloading: state.loginReducers.isloading
});


