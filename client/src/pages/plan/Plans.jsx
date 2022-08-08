import React, { useState, useEffect } from 'react';
import "./plan.css"
import NavBar from '../../components/navbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
const Plans = () => {
    const [plans, setPlans] = useState({})
    const userId = JSON.parse(localStorage.getItem('travelPlaner')).id
    const getPlansData = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/plan/user/${userId}`)
        setPlans(data)
    }
    useEffect(() => {
        getPlansData()
    }, [])
    // for (let i = 0; i < plans.length; i++) {
    //     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    //     let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    //     console.log(plans[i].any.staticDetail[0].endDate)

    //     console.log(weekday[startDateOfWeek])
    //     var endDate = new Date()
    //     console.log(months[startDate.getMonth() + 1] + " " + startDate.getDate())
    //     console.log(plans[i].any.staticDetail.data.body.propertyDescription.name)
    // }
    const tripListData = () => {

        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        for (let i = 0; i < plans.length; i++) {
            var startDate = new Date(plans[i].any.staticDetail[0].startDate)
            var startDateOfWeek = startDate.getDay();

            var endDate = new Date(plans[i].any.staticDetail[0].endDate)
            var endDateOfWeek = endDate.getDay();

            return (
                <div className="imgWrapper">

                    <img src={plans[i].any.staticDetail.hotelImages[0].baseUrl.replace("{size}", "z")} alt="" key={i} />
                    <h1 className="planTitle">{plans[i].any.staticDetail.data.body.propertyDescription.name}</h1>
                    <p className="planDate">{weekday[startDateOfWeek] + " " + months[startDate.getMonth() + 1] + " " + startDate.getDate()} - {weekday[endDateOfWeek] + " " + months[endDate.getMonth() + 1] + " " + endDate.getDate()}</p>

                </div>
            )
        }


    }
    const images = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    ];
    return (
        <div>
            <NavBar></NavBar>
            <div className="planContainer">
                <div className="planWrapper">
                    <div className="planIconContainer">
                        <Link to="/">
                            <FontAwesomeIcon className="planIcon" icon={faArrowLeft} />
                        </Link>

                    </div>

                    <div className="imgContainer">
                        {tripListData(plans)}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Plans;
