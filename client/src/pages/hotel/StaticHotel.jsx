import React, { useState, useEffect } from 'react';
import "./hotel.css"
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
const StaticHotel = ({ staticDetail, photoRendered, errorMsg }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)


    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }
    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === 'l') {
            newSlideNumber = slideNumber === 0 ? photoRendered.length : slideNumber - 1;

        } else {
            newSlideNumber = slideNumber === photoRendered.length ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
    const handleClick = () => {
        setOpenModal(true)

        // if (user) {
        //     setOpenModal(true)
        // } else {
        //     navigate("/")
        // }

    }
    return (
        <div>

            <NavBar />
            <Header type="list" />
            <p>{errorMsg}</p>
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="close"
                            onClick={() => setOpen(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={() => handleMove("l")}
                        />
                        <div className="sliderWrapper">
                            <img
                                src={photoRendered[slideNumber]}
                                key={photoRendered}
                                alt=""
                                className="sliderImg"
                            />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">
                        reserve or book now</button>
                    <h1 className="hotelTitle">
                        {staticDetail.data.body.propertyDescription.name}
                    </h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{staticDetail.data.body.propertyDescription.address.addressLine1},  {staticDetail.data.body.propertyDescription.address.addressLine2},                    {staticDetail.data.body.propertyDescription.address.provinceName} {staticDetail.data.body.propertyDescription.address.postalCode}, {staticDetail.data.body.propertyDescription.address.countryCode} </span>
                    </div>

                    <div className="hotelImages">
                        {photoRendered.slice(0, 6).map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img src={photo} alt="" className="hotelImg" key={i} onClick={() => handleOpen(i)} /></div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <p>{staticDetail.data.body.hygieneAndCleanliness.healthAndSafetyMeasures === undefined ? "not available" : staticDetail.data.body.hygieneAndCleanliness.healthAndSafetyMeasures.measures.map((highlight, index) => (

                                <span key={index}>{highlight}   </span>

                            ))
                            }
                            </p>
                            <h3>Most popular amenities</h3>
                            <span className="hotelPriceHighlight">
                                {staticDetail.data.body.overview.overviewSections[0].content.map((highlight, index) => (

                                    <span key={index}>&#x2022;{highlight}  </span>

                                ))
                                }
                            </span>
                            <h3>Attraction</h3>
                            <span className="hotelDistance">
                                {staticDetail.data.body.overview.overviewSections[1].content.map((highlight, index) => (

                                    <span key={index}>&#x2022;{highlight}</span>

                                ))
                                }
                            </span>

                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>perfect for a 9 night stay!</h1>
                            <span>location in the real heaert of krakow, this property has an excellent ocation score of 9.8</span>
                            <h2>{staticDetail.data.body.propertyDescription.featuredPrice.currentPrice.formatted}  nights</h2>
                            <button onClick={handleClick}>reserve or book now</button>
                        </div>
                    </div>

                </div>

                <MailList />
                <Footer />
            </div>

        </div>
    );
}

export default StaticHotel;
