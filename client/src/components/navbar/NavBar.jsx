import React, { useContext } from 'react';
import "./NavBar.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const { user } = useContext(AuthContext)
    let navigate = useNavigate();
    const signOutUser = () => {
        localStorage.removeItem('travelPlaner');
        localStorage.removeItem('plans');
        window.location.reload(false);
        let path = `/`;
        navigate(path);
    }
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">Travel Planner</span>
                </Link>
                {user ? (
                    <div className="navUserContainer">
                        <span className="userTrip">
                            <Link to="/plans" style={{ color: "inherit", textDecoration: "none" }}> List your trip</Link>
                        </span>
                        <div className="navUserName">
                            <span className="firstName userName " >{user.firstname} </span>
                            <span className="userName lastName">{user.lastname}</span>

                            <span className="signOut"><button className="navButton" onClick={signOutUser}>sign out</button></span>

                        </div>

                    </div >

                ) : (
                        <div className="navItems">
                            <Link to="/login" className="navButton" style={{ color: "#003580", textDecoration: "none" }}>Register</Link>
                            <Link to="/login" className="navButton" style={{ color: "#003580", textDecoration: "none" }}>Login</Link>
                        </div>
                    )}
            </div></div>
    );
}

export default NavBar;
