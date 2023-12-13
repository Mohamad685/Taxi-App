import React from 'react';
import './Passenger.css'; 

const PassengerPage = () => {
  return (
    <div className="passenger-container">
      <div className="user-info">
        <img src="path/to/profile-pic.jpg" alt="Profile Pic" className="profile-pic" />
        <h2>First Last</h2>
        <p>Username: passenger123</p>
      </div>

      <div className="input-group">
        <label className="label" htmlFor="pickup">Pickup Location:</label>
        <input type="text" id="pickup" className="input" placeholder="Enter pickup location" />
      </div>

      <div className="input-group">
        <label className="label" htmlFor="drop">Drop Location:</label>
        <input type="text" id="drop" className="input" placeholder="Enter drop location" />
      </div>

      <div className="input-group">
        <label className="label" htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" className="input" placeholder="Enter phone number" />
      </div>

      <button type="button" className="submit-button">Submit Trip</button>
    </div>
  );
};

export default PassengerPage;
