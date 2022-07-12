import React, { useState, useEffect } from 'react';
import "./hotel.css"
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useLocation, useNavigate } from 'react-router';
import { hotelDetail, hotelPhoto } from '../../dataSource';
import useDetail from '../../hooks/useDetail';
import { Axios } from 'axios';
import StaticHotel from './StaticHotel';
import ApiHotel from './ApiHotel';
const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const id = location.pathname.split("/")[2]
    let staticDetail;
    // let staticDetail
    const photoRendered = []
    for (let photo of hotelPhoto.hotelImages) {
        photoRendered.push(photo.baseUrl.replace("{size}", "z"))
    }

    const { data, loading } = useDetail(
        //use when complete due to limited call request
        `http://localhost:5000/api/hotels/details?id=${id}`,

    )


    // if (data === {} || data === undefined) {
    //     staticDetail = hotelDetail
    //     for (let photo of hotelPhoto.hotelImages) {
    //         photoRendered.push(photo.baseUrl.replace("{size}", "z"))
    //     }
    //     loading = false
    // }

    // for (let photo of data.hotelImages) {
    //     photoRendered.push(photo.baseUrl.replace("{size}", "z"))
    // }
    // }



    return (

        <div>
            {data === {} ? <StaticHotel staticDetail={hotelDetail} photoRendered={photoRendered}></StaticHotel> :
                <ApiHotel staticDetail={hotelDetail} photoRendered={photoRendered}></ApiHotel>

            }

        </div>
    );
}

export default Hotel;
