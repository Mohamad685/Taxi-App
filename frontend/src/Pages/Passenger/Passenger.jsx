import React, { useState } from "react";
import "./Passenger.css";
import GoogleMap from "../../Components/Map/Map";

const PassengerPage = () => {
  const initialFormData = {
    pickup: "",
    drop: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const location = {
    lat: -34.397,
    lng: 150.644,
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" });
  };

  const handleSubmit = () => {

    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        errors[key] = "This field is required";
      }
    });

    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormData(initialFormData);
  };

  return (
  <>
  <div className="user-info">
        <img
          src="path/to/profile-pic.jpg"
          alt="Profile Pic"
          className="profile-pic"
        />
        <h2>Full Name:</h2>
        <p>Username: </p>
      </div>
    <div className="passenger-container">
      

      <div className="passenger-inputs">
        <div className="input-group">
          <label className="passenger-label" htmlFor="pickup">
            Pickup Location:
          </label>
          <input
            type="text"
            id="pickup"
            className="passenger-input"
            placeholder="Enter pickup location"
            value={formData.pickup}
            onChange={handleInputChange}
          />
          <div className="error-message">{formErrors.pickup}</div>
        </div>

        <div className="input-group">
          <label className="passenger-label" htmlFor="drop">
            Drop Location:
          </label>
          <input
            type="text"
            id="drop"
            className="passenger-input"
            placeholder="Enter drop location"
            value={formData.drop}
            onChange={handleInputChange}
          />
          <div className="error-message">{formErrors.drop}</div>
        </div>

        <div className="input-group">
          <label className="passenger-label" htmlFor="phone">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            className="passenger-input"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <div className="error-message">{formErrors.phone}</div>
        </div>

        <button
          type="button"
          className="submit-button"
          onClick={handleSubmit}
        >
          Submit Trip
        </button>
      </div>

      <div className="map-style">
        <GoogleMap location={location} />
      </div>
    </div>
    </>
  );
};

export default PassengerPage;
