import React from 'react';
import "./SearchItem.css"
import { useNavigate } from 'react-router-dom';
const SearchItem = ({ item, i, destination, dates, options }) => {

    const navigate = useNavigate();
    const handleItem = () => {
        navigate(`/hotels/${item.id}`, {
            state: {
                destination, dates, options
            }
        })
    }
    return (
        <div className="searchItem" key={i}>
            <img src={item.optimizedThumbUrls.srpDesktop} className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.landmarks[1].distance}</span>
                <span className="siTaxiOp">airport</span>
                <span className="siSubtitle">air conditioning</span>
                <span className="siFeatures">1bathroom</span>
                <span className="siCancelOp">free cancellation</span>
                <span className="siCancelOpSubtitle">you can cancel later</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>{item.guestReviews.badge == undefined ? "good" : item.guestReviews.badge}</span>
                    <button>{item.guestReviews.rating == undefined ? "9.8" : item.guestReviews.rating}</button>
                    {/* <button>9.8</button> */}

                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">{item.ratePlan.price.current}</span>
                    <span className="siTaxOp">incluses taxes and fee</span>

                    <button className="siCheckButton" onClick={handleItem}>see avaiability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
