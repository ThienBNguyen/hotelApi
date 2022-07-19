import React from 'react';
import "./login.css"
import NavBar from '../../components/navbar/NavBar';
import AccountPrivacy from '../../components/accountPrivacy/AccountPrivacy';
const SignIn = () => {
    return (
        <div>
            <NavBar />
            <div className="loginContainer">
                <form >
                    <div className="loginForm">
                        <h1 className="loginTitle">Enter your password</h1>
                        <p>Enter your Booking.com password for
                            <strong> admin@gmail.com.</strong>
                        </p>
                        <label htmlFor="">password</label>
                        <input type="password" name="" id="" />
                        <button>Sign in</button>

                        <div className="loginSocialDevider">
                            <div className="dash"></div>
                            <span className="socialOptionText">or </span>
                            <div className="dash"></div>
                        </div>
                        <div className="signInALink">
                            <button>Sign in with a verification link</button>
                        </div>

                        <div className="loginOtherOptions">
                            <button>Forgot your password?</button>
                        </div>
                    </div>
                </form>
                <AccountPrivacy />

            </div>
        </div>
    );
}

export default SignIn;
