import React from "react";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";

export const Authenticate = (token) => {
    try {
        const res = decode(token);
        if (res.exp > Date.now() / 1000) {
            return { res };
        }
        return false;
    } catch (error) {
        return false;
    }
};

/* istanbul ignore next */
export const ProtectedRoute = ({ component: Component, ...props }) => {
    const isLoggedIn = Authenticate(localStorage.getItem("auth_token"));
    return (
        <Route
            {...props}
            render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)
            }
        />
    );
};

/* istanbul ignore next */
export const ProtectedLoginRoute = ({ component: Component, ...props }) => {
    const isLoggedIn = Authenticate(localStorage.getItem("auth_token"));
    return (
        <Route
            {...props}
            render={props => (isLoggedIn ? <Redirect to="/parcels" /> : <Component {...props} />)
            }
        />
    );
};

