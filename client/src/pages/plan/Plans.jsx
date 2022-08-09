import React, { useState, useEffect } from 'react';
import "./plan.css"
import NavBar from '../../components/navbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
const Plans = () => {
    const [plans, setPlans] = useState([])
    const userId = JSON.parse(localStorage.getItem('travelPlaner')).id
    const getPlansData = async () => {
        // const data = await axios.get(`http://localhost:5000/api/plan/user/${userId}`)
        const data = await axios.get(`https://tnbhotelapi.herokuapp.com/api/plan/user/${userId}`)

        localStorage.setItem('plans', JSON.stringify(data));
        // setPlans(data.data)
        setPlans(JSON.parse(localStorage.getItem('plans')).data)

    }
    useEffect(() => {
        getPlansData()
    }, [])

    var userPlan = []
    const tripListData = () => {

        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        for (let i = 0; i < plans.length; i++) {
            var startDate = new Date(plans[i].any.staticDetail[0].startDate)
            var startDateOfWeek = startDate.getDay();
            var endDate = new Date(plans[i].any.staticDetail[0].endDate)
            var endDateOfWeek = endDate.getDay();
            let planJSX = <><div className="imgWrapper" key={i}>
                <Link to={plans[i]._id} key={i}>
                    <img src={plans[i].any.staticDetail.hotelImages[0].baseUrl.replace("{size}", "z")} alt="" key={i} />

                    <h1 className="planTitle">{plans[i].any.staticDetail.data.body.propertyDescription.name}</h1>
                    <p className="planDate">{weekday[startDateOfWeek] + " " + months[startDate.getMonth() + 1] + " " + startDate.getDate()} - {weekday[endDateOfWeek] + " " + months[endDate.getMonth() + 1] + " " + endDate.getDate()}</p>
                </Link>
            </div></>
            userPlan.push(planJSX)

        }
    }
    tripListData()
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
                        <>

                            {userPlan}
                        </>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Plans;
