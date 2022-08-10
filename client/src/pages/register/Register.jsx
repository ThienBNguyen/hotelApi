import React, { useState, useContext } from 'react';
import "./register.css"
import NavBar from '../../components/navbar/NavBar';
import AccountPrivacy from '../../components/accountPrivacy/AccountPrivacy';
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';
const Register = () => {
    const locationState = useLocation();
    const navigate = useNavigate();
    const userEmail = locationState.state.user.email
    const [registerUser, setRegisterUser] = useState({
        firstname: undefined,
        lastname: undefined,
        email: userEmail,
        password: undefined,
    })
    const [password2, setPassword2] = useState(
        ""
    )
    const handleChange = (e) => {
        setRegisterUser((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        setPassword2(() => ({ [e.target.id]: e.target.value }))
    }

    let passwordIdenticalCheck = "";
    if (registerUser.password === password2.password2) {
        passwordIdenticalCheck = "password match"
    } else {
        passwordIdenticalCheck = "password does not match"
    }
    const handleClick = async (e) => {
        e.preventDefault();
        delete registerUser.password2
        const newUser = registerUser
        try {
            await axios.post(`https://tnbhotelapi.herokuapp.com/api/user/register`, newUser)
            navigate("/login/password", {
                state: {
                    userEmail
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <NavBar />
            <div className="registerContainer">
                <div className="registerWrapper">
                    <form>
                        <div className="registerForm">
                            <h1 className="registerTitle">
                                Register
                         </h1>
                            <label >First Name</label>
                            <input type="text" onChange={handleChange} placeholder="Fist Name" id="firstname" />
                            <label >Last Name</label>
                            <input type="text" onChange={handleChange} placeholder="Last Name" id="lastname" />
                            <p>Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers.</p>
                            <label >password</label>
                            <input type="password" onChange={handleChange} placeholder="Password" id="password" />
                            <label >confirm password</label>
                            <input type="password" onChange={handleChange} placeholder="Password" id="password2" />
                            <p className="warning">
                                {passwordIdenticalCheck}
                            </p>
                            <button onClick={handleClick}>Create account</button>
                        </div>

                    </form>
                </div>
                <AccountPrivacy />
            </div>
        </div>
    );
}

export default Register;
