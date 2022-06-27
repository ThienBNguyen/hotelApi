import React from 'react';
import "./Features.css"
import { Austin, Dallas, Chicago } from "../../dataSource"
const Features = () => {
    const images = ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", "https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"]
    const firstLocation = Austin.data.body.header.match(/([^,]*),(.*)/)[1].split(' ')[0]
    const firstTotalCount = Austin.data.body.searchResults.totalCount
    const secondLocation = Dallas.data.body.header.match(/([^,]*),(.*)/)[1].split(' ')[0]
    const secondTotalCount = Dallas.data.body.searchResults.totalCount
    const thirdLocation = Chicago.data.body.header.match(/([^,]*),(.*)/)[1].split(' ')[0]
    const thirdTotalCount = Chicago.data.body.searchResults.totalCount
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={images[0]} />
                <div className="featuredTitles">
                    <h1>{firstLocation}</h1>
                    <h2>{firstTotalCount}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={images[1]} />
                <div className="featuredTitles">
                    <h1>{secondLocation}</h1>
                    <h2>{secondTotalCount}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={images[2]} />
                <div className="featuredTitles">
                    <h1>{thirdLocation}</h1>
                    <h2>{thirdTotalCount}</h2>
                </div>
            </div>
        </div>
    );
}

export default Features;
