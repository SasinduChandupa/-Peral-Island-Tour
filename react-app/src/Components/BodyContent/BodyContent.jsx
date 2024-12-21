import React from "react";
import "./BodyContent.css";

function BodyContent() {
  const bodyStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  };

  return (
    <div style={bodyStyle}>
      <div style={{ marginTop: "50px" }}>
        <h1>Welcome to Peral Island Tour</h1>
        <div className="container">
          <p className="p1">
            <b>Peral Island Tour</b> is your ultimate travel companion for exploring the beautiful island of Sri Lanka. Whether you're a foreigner visiting for the first time or a seasoned traveler, we offer a seamless experience with customized vehicle rentals and professional drivers who double as local guides. You can easily book tours to the most iconic destinations in Sri Lanka, from pristine beaches to ancient temples, lush hill stations, and wildlife safaris. Let us take care of your travel needs, ensuring a safe, comfortable, and unforgettable journey through the enchanting Pearl of the Indian Ocean.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
