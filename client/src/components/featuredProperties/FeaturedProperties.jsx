import React, { useEffect } from 'react';
import "./FeaturedProperties.css"
import NavBar from '../navbar/NavBar';
import { useLocation } from 'react-router';
import StaticHotel from '../../pages/hotel/StaticHotel';


const FeaturedProperties = () => {
    const location = useLocation();
    const planId = location.pathname.split("/")[2]
    const planData = JSON.parse(localStorage.getItem('plans')).data
    const userSelectPlan = []
    const photoRendered = []

    for (let i = 0; i < planData.length; i++) {
        if (planData[i]._id == planId) {
            userSelectPlan.push(planData[i])
        }
    }
    let staticDetail = userSelectPlan[0].any.staticDetail
    const error = false
    const loading = false
    //data from the hotelDetail
    //data loop from photo
    for (let photo of userSelectPlan[0].any.staticDetail.hotelImages) {
        photoRendered.push(photo.baseUrl.replace("{size}", "z"))
    }
    return (
        <div>
            <div className="featuredPropertiesContainer">
                <StaticHotel type="plan" errorMsg={error} staticDetail={staticDetail} photoRendered={photoRendered} loadingData={loading} />

                {/* <div className="featuredPropertiesWrapper">
                    <div className="featuredPropertiesDetail">
                        <h3 className="introDetail">
                            Your Plan
            </h3>
                        <div className="planDetailContainer">
                            <img src="" alt="" />
                            <div className="planDetail">
                                <div className="planName">
                                    hotelName</div>
                                <p className="planDate">date</p>
                            </div>
                        </div>
                    </div>
                    <div className="googleMapContainer">


                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default FeaturedProperties;
