import React, { useState, useContext } from 'react';
import "./login.css"
import NavBar from '../../components/navbar/NavBar';
import AccountPrivacy from '../../components/accountPrivacy/AccountPrivacy';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
const SignIn = () => {
    const locationState = useLocation();
    const userEmail = locationState.state.userEmail
    const [userLogin, setUserLogin] = useState({
        email: userEmail,
        password: undefined
    })
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleChange = (e) => {
        setUserLogin(() => ({ [e.target.id]: e.target.value, email: userEmail }))

    }
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:5000/api/user/login", userLogin);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
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
                        <input type="password" placeholder="Password" id="password" onChange={handleChange} />
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
