import React, { useState, useEffect } from 'react';
import "./BookingConfirmationForm.css";

function BookingConfirmationForm() {
    const [backgroundImage, setBackgroundImage] = useState('');

    const backgroundImages = [
        "/src/assets/Anuradhapura.jpg",
        "/src/assets/jayasrimahabodi..jpg",
        "/src/assets/sigiriya.jpg",
        "/src/assets/kandy.jpg",
        "/src/assets/9Arch.jpg",
        "/src/assets/colombo.jpg",
        "/src/assets/galle.jpg",
        "/src/assets/hikkaduwa.jpg",
        "/src/assets/jaffna.jpg",
        "/src/assets/unawatuna.jpg",
    ];

    useEffect(() => {
        const preloadImages = () => {
            backgroundImages.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        };
        preloadImages();

        let index = 0;
        const interval = setInterval(() => {
            setBackgroundImage(backgroundImages[index]);
            index = (index + 1) % backgroundImages.length; // Loop images
        }, 1300);
        return () => clearInterval(interval);
    }, []); 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking Confirmed for ${name} on ${date} at ${time}`);
    };

    return (
        <div className="b1">
            <div
                className="booking-form-container"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: '20px',
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden', 
                }}
            >
                {/* Light overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        borderRadius: '8px', 
                        zIndex: '1',    
                    }}
                ></div>

                <div className="booking-form-content" style={{ position: 'relative', zIndex: '2' }}>
                    <h1>Booking Confirmation</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Date:</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Time:</label>
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Number of Guests:</label>
                            <input
                                type="number"
                                value={numberOfGuests}
                                onChange={(e) => setNumberOfGuests(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Special Requests:</label>
                            <textarea
                                value={specialRequests}
                                onChange={(e) => setSpecialRequests(e.target.value)}
                            />
                        </div>
                        <button type="submit">Confirm Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookingConfirmationForm;
