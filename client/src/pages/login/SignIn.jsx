import React from 'react';
import "./login.css"
import NavBar from '../../components/navbar/NavBar';
import AccountPrivacy from '../../components/accountPrivacy/AccountPrivacy';
import { useLocation } from 'react-router';
const SignIn = () => {
    const locationState = useLocation();
    const userEmail = locationState.state.userEmail
    const handleClick = async (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <NavBar />
            <div className="loginContainer">
                <form >
                    <div className="loginForm">
                        <h1 className="loginTitle">Enter your password</h1>
                        <p>Enter your Booking.com password for
                            <strong> {userEmail}</strong>
                        </p>
                        <label htmlFor="">password</label>
                        <input type="password" name="" id="" />
                        <button onClick={handleClick}>Sign in</button>

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
