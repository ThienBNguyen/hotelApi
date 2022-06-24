import React from 'react';
import "./MailList.css"
const MailList = () => {
    return (
        <div className="mail">
            <h2 className="mailTitle">
                Save time, save Money!
            </h2>
            <div className="mailDesc">
                Sign up and we'll send the best deals to you
            </div>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your email" />
                <button>Subsribe</button>
                <div className="mailCheckBoxContainer">
                    <input type="checkbox" name="subscribe" id="" />
                    <span>Send me a link to get the FREE booking.com app!</span>
                </div>
            </div>
           

        </div>
    );
}

export default MailList;
