import React, { useState, useContext } from 'react';
import "./Header.css"
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // t
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faLocationDot,
    faPlane,
    faBuildingNgo,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchContext } from '../../context/SearchContext';

const Header = ({ type }) => {
    const [destination, setDestination] = useState("")
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ])
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const navigate = useNavigate();
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }
    const { dispatch } = useContext(SearchContext);
    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
        navigate("/hotels", {
            state: {
                destination, dates, options
            }
        })
    }
    return (
        <div className="header">
            <div className={
                type === "list" ? "headerContainer listMode" : "headerContainer"
            }>


                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>stay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights   </span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBuildingNgo} />
                        <span>Flights + Hotel   </span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals   </span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Attraction   </span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">
                            Find Deals For any season</h1>
                        <p className="headerIntro">
                            From cozy bed & breakfasts to luxery hotels</p>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="where are you going?" onChange={(e) => setDestination(e.target.value)} className="headerSearchInput" />
                            </div>
                            <div className="headerSearchItem"

                            >
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
                                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                {openDate && (<DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className="date"
                                    minDate={new Date()}
                                />)}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
                                    {`${
                                        options.adult
                                        } adult · ${options.children} children · ${options.room} room`}
                                </span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">
                                            Adult
                                    </span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>
                                                -
                                    </button>
                                            <span className="optionCounterNumber">
                                                {options.adult}
                                            </span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>
                                                +
                                        </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">
                                            Children
                                </span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>
                                                -
                                        </button>
                                            <span className="optionCounterNumber">
                                                {options.children}
                                            </span>
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>
                                                +
                                        </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">
                                            Rooms
                                    </span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>
                                                -
                                    </button>
                                            <span className="optionCounterNumber">
                                                {options.room}
                                            </span>
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>

                    </>
                )}


            </div>

        </div>


    );
}

export default Header;
