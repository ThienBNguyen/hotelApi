import React from 'react';
import "./hotel.css"
import { useLocation, } from 'react-router';
import { hotelDetail, hotelPhoto } from '../../dataSource';
import useDetail from '../../hooks/useDetail';
import StaticHotel from './StaticHotel';
const Hotel = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const userDates = location.state.dates
    let staticDetail;
    const photoRendered = []
    let error = "";
    const { data, loading } = useDetail(
        //use when complete due to limited call request
        // `http://localhost:5000/api/hotels/details?id=${id}`,
        `https://tnbhotelapi.herokuapp.com/api/hotels/details?id=${id}`
    )
    if (data == "You have exceeded the MONTHLY quota for Requests on your current plan.") {
        for (let photo of hotelPhoto.hotelImages) {
            photoRendered.push(photo.baseUrl.replace("{size}", "z"))
        }
        staticDetail = { hotelDetail, userDates }
        error = data;
    } else {
        for (let photo of data.hotelImages) {
            photoRendered.push(photo.baseUrl.replace("{size}", "z"))
        }
        staticDetail = { ...data, ...userDates }
    }
    return (

        <div>
            <StaticHotel errorMsg={error} staticDetail={staticDetail} photoRendered={photoRendered} loadingData={loading} ></StaticHotel>
        </div>
    );
}

export default Hotel;
