import React, { useState } from 'react';
import "./login.css"
import NavBar from '../../components/navbar/NavBar';

import AccountPrivacy from "../../components/accountPrivacy/AccountPrivacy"
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';
const Login = () => {
    const [user, setUser] = useState({
        email: undefined
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser(() => ({ [e.target.id]: e.target.value }))
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.get(`http://localhost:5000/api/user/verifyemail/${user.email}`)
            navigate("/login/password", {
                state: {
                    user
                }
            })
        } catch (err) {
            navigate("/register/password", {
                state: {
                    user
                }
            })
        }

    }
    return (
        <div>
            <NavBar />
            <div className="loginContainer">
                <div className="loginWrapper">
                    <form action="">
                        <div className="loginForm">
                            <h1 className="loginTitle">
                                Sign in or create an account
                            </h1>
                            <label >Email Address</label>
                            <input type="text" onChange={handleChange} id="email" placeholder="email" />
                            <button onClick={handleLogin}>Continue with email</button>
                        </div>
                        <div className="loginSocial">
                            <div className="loginSocialDevider">
                                <div className="dash"></div>
                                <span className="socialOptionText">or use one of these options</span>
                                <div className="dash"></div>
                            </div>
                            <div className="loginSocialButton">

                                <i className="	fa fa-facebook"></i>
                                <i className="	fa fa-google"></i>
                                <i className="	fa fa-phone"></i>
                            </div>
                            <div className="loginOtherOptions">
                                <button >More ways to sign in</button>
                            </div>

                        </div>

                    </form>
                </div>
                <AccountPrivacy />

            </div>
        </div>

    );
}

export default Login;

