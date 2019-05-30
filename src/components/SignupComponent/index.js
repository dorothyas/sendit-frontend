import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import registerAction from '../../actions/registerAction';
import Loader from '../../components/Loader';


export class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password1: '',
            loader: {
                loading: false
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.registerAction({ user_name: this.state.username, user_email: this.state.email, user_password: this.state.password, user_password1: this.state.password1 }, this.props)
        this.setState({ loader: { loading: true } });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.isSuccessful === true) {
            this.props.history.push("/login")
        } else {
            this.setState({
                loader: { loading: false }
            }) 
        }
        
    }

    render() {
        return (
            <div>
                <Loader {...this.state.loader} />
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form className="signup" onSubmit={this.onSubmit}>
                            <h2>Create Account</h2>
                            <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.onChange} required/>
                            <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.onChange} required/>
                            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onChange} required/>
                            <input type="password" name="password1" value={this.state.password1} placeholder="Re-enter Password" onChange={this.onChange} required/>
                            <button type="submit" value="submit" className="submit">Sign Up</button>
                            <br />
                            <span><Link to='/login' className="link"> Already have an account? Login</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export const mapStateToProps = state => ({
    token: state.signupReducer.token,
    errors: state.signupReducer.errors,
    isSuccessful: state.signupReducer.isSuccessful,
});

SignUpForm.propTypes = {
    token: PropTypes.string,
    errors: PropTypes.shape({
        email: PropTypes.any,
        password: PropTypes.any,
        error: PropTypes.any,
    }),

};

export default connect(mapStateToProps, { registerAction })(SignUpForm);
