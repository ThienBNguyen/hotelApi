import React from 'react';
import "./SearchItem.css"
import { Link } from 'react-router-dom';
const SearchItem = () => {
    const item = {
        _id: 1
    }
    const images = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    ];
    const i = 1
    return (
        <div className="searchItem">
            <img src={images[i]} className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">name</h1>
                <span className="siDistance">distance</span>
                <span className="siTaxiOp">airport</span>
                <span className="siSubtitle">air conditioning</span>
                <span className="siFeatures">1bathroom</span>
                <span className="siCancelOp">free cancellation</span>
                <span className="siCancelOpSubtitle">you can cancel later</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Exellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">price</span>
                    <span className="siTaxOp">incluses taxes and fee</span>

                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">see avaiability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
