import React, { useState } from "react";
import "./FilterBarContent.css";

const FilterBarContent = () => {
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(20000);

    return (
        <div>
            {/* Topic Section */}
            <div className="topic-container2">
                <h1>Search your holiday Jurney for your budget</h1>
            </div>

            <div className="filter-bar">
                <div className="filter-item">
                    <label htmlFor="destination">Search Your Destination:</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="destination"
                            placeholder="Enter Name Here ..."
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                        <span className="icon">📍</span>
                    </div>
                </div>

                <div className="filter-item">
                    <label htmlFor="date">Enter Your Date:</label>
                    <div className="input-group">
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>

                <div className="filter-item">
                    <label htmlFor="price">Max Price:</label>
                    <div className="price-container">
                        <span>LKR.{price}</span>
                        <input
                            type="range"
                            id="price"
                            min="0"
                            max="50000"
                            step="1000"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                <button className="filter-button">
                    <span className="filter-icon">🔍</span> MORE FILTERS
                </button>
            </div>
        </div>
    );
};

export default FilterBarContent;
