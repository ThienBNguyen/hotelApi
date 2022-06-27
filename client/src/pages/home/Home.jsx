import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import Features from '../../components/features/Features';

import "./Home.css"
const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div className="homeContainer">
                <Features />
            </div>
            <MailList />
            <Footer />
        </div>
    );
}

export default Home;
