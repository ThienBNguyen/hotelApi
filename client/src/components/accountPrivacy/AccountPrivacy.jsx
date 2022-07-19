import React from 'react';
import "./accountPrivacy.css"
const AccountPrivacy = () => {
    return (
        <div className="accountPrivacyContainer">
            <p className="line"></p>
            <p className="accountInfo">By signing in or creating an account, you agree with our <a> Terms & Conditions </a> and <a>Privacy Statement</a> </p>
            <p className="line"></p>
            <p className="accountWarning">
                Do not sell my personal information – California residents only</p>
            <p className="line"></p>
            <div className="aText">
                <p>All rights reserved.</p>
                Copyright (2006-2022) – Booking.com™
            </div>
        </div>
    );
}

export default AccountPrivacy;

