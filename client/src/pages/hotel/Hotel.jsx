import React, { useState } from 'react';
import "./hotel.css"
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useLocation, useNavigate } from 'react-router';
import useFetch from '../../hooks/useFetch';
import { hotelDetail, hotelPhoto } from '../../dataSource';
const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
];
const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const location = useLocation();
    const navigation = useNavigate();
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const staticDetail = hotelDetail
    const staticPhoto = hotelPhoto
    const photoRendered = []
    for (let photo of hotelPhoto.hotelImages) {
        // console.log(photo.baseUrl.replace("{size}", "z"))
        photoRendered.push(photo.baseUrl.replace("{size}", "z"))
    }
    // console.log(location.state)
    const id = location.pathname.split("/")[2]
    const { data, loading } = useFetch(
        //use when complete due to limited call request
        // `http://localhost:5000/api/hotels/details?id=${id}`
    )
    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction == 'l') {
            newSlideNumber = slideNumber === 0 ? photoRendered.length : slideNumber - 1;

        } else {
            newSlideNumber = slideNumber === photoRendered.length ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
    const handleClick = () => {
        setOpenModal(true)

    }
    return (
        <div>
            <NavBar />
            <Header type="list" />
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
                                <img src={photo} alt="" className="hotelImg" onClick={() => handleOpen(i)} /></div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <p>{staticDetail.data.body.hygieneAndCleanliness.healthAndSafetyMeasures.measures.map((highlight) => (

                                <span>{highlight}   </span>

                            ))
                            }
                            </p>
                            <h3>Most popular amenities</h3>
                            <span className="hotelPriceHighlight">
                                {staticDetail.data.body.overview.overviewSections[0].content.map((highlight) => (

                                    <span>&#x2022;{highlight}  </span>

                                ))
                                }
                            </span>
                            <h3>Attraction</h3>
                            <span className="hotelDistance">
                                {staticDetail.data.body.overview.overviewSections[1].content.map((highlight) => (

                                    <span>&#x2022;{highlight}</span>

                                ))
                                }
                            </span>

                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>perfect for a 9 night stay!</h1>
                            <span>location in the real heaert of krakow, this property has an excellent ocation score of 9.8</span>
                            <h2>{staticDetail.data.body.propertyDescription.featuredPrice.currentPrice.formatted}  nights</h2>
                            <button>reserve or book now</button>
                        </div>
                    </div>

                </div>
                <MailList />
                <Footer />
            </div>

        </div>
    );
}

export default Hotel;
