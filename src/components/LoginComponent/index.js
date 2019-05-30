import React from 'react';
import Input from '../Input';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


const Login = (props) => {
    const {
        onSubmit, onChange, password, username
    } = props
    const header = "Welcome Back!"
    return (
        <div>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form className="login-form" onSubmit={onSubmit}>
                        <h1>{header}</h1>
                        <h2>Sign In</h2>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={onChange}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                            min="8"
                        />
                        <button>Sign in</button>
                        <br />
                        <div>
                            <Link to='/register' className="link">Don't Have an account? SignUp here.</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
Login.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Login;
