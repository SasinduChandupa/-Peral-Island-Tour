import React from "react";
import "./CardContent.css";

const CardContent = () => {
  const places = [
    {
      title: "Ancient City of Polonnaruwa",
      location: "Polonnaruwa",
      type: "Heritage",
      price: "LKR 14,750",
      description: "A historic city featuring impressive ruins and ancient temples.",
      image: "/src/assets/Anuradhapura.jpg",
    },
    {
        title: "Sri Maha Bodiya",
        location: "Anuradhapura",
        type: "Spiritual",
        price: "LKR 14,000",
        description: "Ancient sacred fig tree, symbolizing Buddhist heritage, worshipped for spiritual blessings and tranquility.",
        image: "/src/assets/jayasrimahabodi..jpg",
      },
    {
      title: "Sigiriya Rock Fortress",
      location: "Sigiriya",
      type: "Heritage",
      price: "LKR 15,200",
      description: "Climb the iconic Lion Rock for breathtaking views.",
      image: "/src/assets/sigiriya.jpg",
    },
    {
      title: "Temple of the Tooth Relic",
      location: "Kandy",
      type: "Spiritual",
      price: "LKR 9,000",
      description: "A sacred Buddhist site housing the tooth relic of Lord Buddha.",
      image: "/src/assets/kandy.jpg",
    },
    {
        title: "9 Arch bridge",
        location: "Ella",
        type: "Spiritual",
        price: "LKR 8,500",
        description: "A railway bridge maked like 9 archs",
        image: "/src/assets/9Arch.jpg",
      },
      {
        title: "Colombo",
        location: "Colombo",
        type: "Spiritual",
        price: "LKR 3,000",
        description: "The main city of Sri Lanka, You caan get live city exeperience",
        image: "/src/assets/colombo.jpg",
      },
      {
        title: "Galle Fort",
        location: "Galle",
        type: "Spiritual",
        price: "LKR 7,800",
        description: "Another main city in Sri Lanka, You can watch Galle Dutch Fort, Beaches",
        image: "/src/assets/galle.jpg",
      },
      {
        title: "Hikkaduwa Beach",
        location: "Hikkaduwa",
        type: "Spiritual",
        price: "LKR 6,000",
        description: "One of the beautifull beac in the world.",
        image: "/src/assets/hikkaduwa.jpg",
      },
      {
        title: "Nallur",
        location: "Jaffna",
        type: "Spiritual",
        price: "LKR 13,000",
        description: "The main tamil kovik in Sri Lanka, This place most popular with tamil peoples",
        image: "/src/assets/jaffna.jpg",
      },
      {
        title: "Unawatuna Beach",
        location: "Galle",
        type: "Spiritual",
        price: "LKR 14,900",
        description: "One of the most beautiful beach of popular for surfing",
        image: "/src/assets/unawatuna.jpg",
      },
  ];

  return (
    <div>
      {/* Topic Section */}
      <div className="topic-container">
        <h1>Explore the Most Favorite Places in Sri Lanka</h1>
        <p>Discover the beauty, heritage, and culture of Sri Lanka through these incredible destinations.</p>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        {places.map((place, index) => (
          <div className="card" key={index}>
            <img src={place.image} alt={place.title} className="card-image" />
            <div className="card-content">
              <h3>{place.title}</h3>
              <p>{place.location}</p>
              <span className="tag">{place.type}</span>
              <h4>{place.price}</h4>
              <p>{place.description}</p>
              <button className="details-button">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContent;
