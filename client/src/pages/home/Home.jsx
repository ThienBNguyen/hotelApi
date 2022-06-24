import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

// import "./Home.scss"
const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <MailList />
            <Footer />
        </div>
    );
}

export default Home;
