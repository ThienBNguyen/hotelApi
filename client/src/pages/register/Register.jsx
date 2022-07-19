import React from 'react';
import "./register.css"
import NavBar from '../../components/navbar/NavBar';
import AccountPrivacy from '../../components/accountPrivacy/AccountPrivacy';
const Register = () => {
    return (
        <div>
            <NavBar />
            <div className="registerContainer">
                <div className="registerWrapper">
                    <form>
                        <div className="registerForm">
                            <h1 className="registerTitle">
                                Create password
                         </h1>
                            <p>Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers.</p>
                            <label >password</label>
                            <input type="password" />
                            <label >confirm password</label>
                            <input type="password" />
                            <button>Create account</button>
                        </div>

                    </form>
                </div>
                <AccountPrivacy />
            </div>
        </div>
    );
}

export default Register;
