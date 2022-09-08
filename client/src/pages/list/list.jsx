import React, { useState } from 'react';
import "./list.css"
import NavBar from '../../components/navbar/NavBar';
import { useLocation } from 'react-router';
import Header from '../../components/header/Header';
import { DateRange } from "react-date-range";
import { format } from 'date-fns';
import SearchItem from '../../components/searchItem/SearchItem';
import { Austin } from "../../dataSource"
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faIcons, faUser, faUserLarge, faSearch, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [openModal, setOpenModal] = useState(true)
    let curData;
    const { data, loading, reFetch } = useFetch(
        //use when complete due to limited call request
        // `http://localhost:5000/api/hotels?location=${destination}`
        `https://tnbhotelapi.herokuapp.com/api/hotels?location=${destination}`
    )
    if (data === "You have exceeded the MONTHLY quota for Requests on your current plan.") {
        curData = Austin;
    } else {
        curData = data;
    }
    const handleClick = () => {
        reFetch()
    }
    const searchInfo = () => {
        setOpenModal(false)
    }
    return (
        <div>
            <NavBar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearchWideScreen">

                        <h1 className="lsTitle">Search</h1>
                        <span className="removeListSearch" onClick={() => setOpenModal(true)}> X</span>
                        <div className="lsItem">
                            <label >Destination</label>
                            <input type="text" placeholder={destination} value={destination} onChange={(e) => setDestination(e.target.value)} />
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Check-in Date</label>
                            <span>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange onChange={(item) => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}
                                />
                            )}

                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        onChange={(e) => setMin(e.target.value)}
                                        className="lsOptionInput"
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        onChange={(e) => setMax(e.target.value)}
                                        className="lsOptionInput"
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.adult}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="lsOptionInput"
                                        placeholder={options.children}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    {openModal ?
                        <div onClick={searchInfo} className="listSearchInfo">
                            <div className="listSearchWraper">
                                <div className="listSearchHeader">
                                    <h1><FontAwesomeIcon className="listIconSearch" icon={faSearch} /> {destination}</h1>
                                </div>
                                <div className="listUserOption">
                                    <FontAwesomeIcon className="listIcon" icon={faCalendarDays} />
                                    <span> {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                                    {openDate && (
                                        <DateRange onChange={(item) => setDates([item.selection])}
                                            minDate={new Date()}
                                            ranges={dates}
                                        />
                                    )}
                                    <FontAwesomeIcon className="listIcon" icon={faUserLarge} />
                                    <span className="lsOptionText">Adult</span>
                                </div>
                            </div>

                        </div> :
                        <div className="listSearch">

                            <h1 className="lsTitle">Search</h1>
                            <span className="removeListSearch" onClick={() => setOpenModal(true)}> X</span>
                            <div className="lsItem">
                                <label >Destination</label>
                                <input type="text" placeholder={destination} value={destination} onChange={(e) => setDestination(e.target.value)} />
                            </div>
                            <div className="lsItem">
                                <label htmlFor="">Check-in Date</label>
                                <span>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && (
                                    <DateRange onChange={(item) => setDates([item.selection])}
                                        minDate={new Date()}
                                        ranges={dates}
                                    />
                                )}

                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                            Min price <small>per night</small>
                                        </span>
                                        <input
                                            type="number"
                                            onChange={(e) => setMin(e.target.value)}
                                            className="lsOptionInput"
                                        />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                            Max price <small>per night</small>
                                        </span>
                                        <input
                                            type="number"
                                            onChange={(e) => setMax(e.target.value)}
                                            className="lsOptionInput"
                                        />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Adult</span>
                                        <input
                                            type="number"
                                            min={1}
                                            className="lsOptionInput"
                                            placeholder={options.adult}
                                        />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Children</span>
                                        <input
                                            type="number"
                                            min={0}
                                            className="lsOptionInput"
                                            placeholder={options.children}
                                        />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Room</span>
                                        <input
                                            type="number"
                                            min={1}
                                            className="lsOptionInput"
                                            placeholder={options.room}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleClick}>Search</button>
                        </div>
                    }
                    <div className="listResult">
                        {/* <p>{data}</p> */}

                        {loading ?
                            "loading"

                            : <>
                                {/* read data render to component */}
                                {curData.data.body.searchResults.results.map((item, i) => (
                                    <SearchItem item={item} i={i} key={i} destination={destination} dates={dates} options={options} />
                                ))}

                            </>}

                    </div>


                </div>

            </div>
            <MailList />
            <Footer />
        </div>
    );
}

export default List;
