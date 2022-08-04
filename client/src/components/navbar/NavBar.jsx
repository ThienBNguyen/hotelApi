import React, { useContext } from 'react';
import "./NavBar.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const NavBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">Travel Planner</span>
                </Link>
                {user ? (
                    <div>
                        <span className="userTrip">
                            List your trip</span>
                        <span className="firstName userName " >{user.firstname} </span>
                        <span className="userName lastName">{user.lastname}</span>

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
