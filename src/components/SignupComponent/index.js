import React from 'react'

const SignUpForm = () => {
    return (
        <div>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}
export default SignUpForm;
