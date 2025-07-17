import React from 'react';
import './BookingSection.css'; 

const BookingSection = () => {
  return (
    <div className="bookingWrapper">
      <div className="bookingSection">
       
        <div className="leftText">
          <h2>Book Your Stay <br />With Us Today</h2>
        </div>

        
        <form className="bookingForm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <div className="row">
            <div style={{ flex: 1 }}>
              <label htmlFor="roomType">Room Type</label>
              <select id="roomType">
                <option>Deluxe</option>
                <option>Suite</option>
                <option>Standard</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="guests">Guests</label>
              <select id="guests">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3+ Guests</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div style={{ flex: 1 }}>
              <label htmlFor="checkIn">Check-In</label>
              <input type="date" id="checkIn" />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="checkOut">Check-Out</label>
              <input type="date" id="checkOut" />
            </div>
          </div>

          <button type="submit">Check Availability →</button>
        </form>
      </div>
    </div>
  );
};

export default BookingSection;
