import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";

export class LogoutPage extends Component {
    componentWillMount() {
        localStorage.removeItem("auth_token");


        toast.success("You have successfully Logged out", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            onClose: this.props.history.push("/login")
        });
    }

    render() {
        return (
            <div>
                <ToastContainer />
            </div>
        );
    }
}

export default LogoutPage;
