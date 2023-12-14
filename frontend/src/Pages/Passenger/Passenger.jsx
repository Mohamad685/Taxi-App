import React, { useState , useEffect} from "react";
import "./Passenger.css";
import FeedbackForm from "../../Components/FeedbackForm/Feedback";
import GoogleMaps from "../../Components/Map/Map";

import {sendRequest} from '../../request'

const PassengerPage = () => {

	const submitRequest = async() => {
		const response = await sendRequest({
			method:'post',
			route:'ride-requests/create',
			body:{
				passenger_id: 8,
				current_location: formData.pickup,
				destination: formData.drop,
			}
		})
		console.log(response);
	}
  const initialFormData = {
    pickup: "",
    drop: "",
    phone: "",
  };

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const getLocation = async() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });
          }
        );
      } 
    };

    getLocation();
  }, []);

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [feedbackFormData, setFeedbackFormData] = useState({
    rating: "",
    feedback: "",
  });

  const location = {
    lat: -34.397,
    lng: 150.644,
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" });
  };

  const handleFeedbackChange = (e) => {
    const { id, value } = e.target;
    setFeedbackFormData({ ...feedbackFormData, [id]: value });
    setFormErrors({});
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

    setSubmitted(true);
  };

  const handleFeedbackSubmit = () => {
    const feedbackErrors = {};
    if (
      !feedbackFormData.rating ||
      feedbackFormData.rating < 1 ||
      feedbackFormData.rating > 5
    ) {
      feedbackErrors.rating = "Please enter a valid rating between 1 and 5";
    }
    if (!feedbackFormData.feedback.trim()) {
      feedbackErrors.feedback = "Feedback cannot be empty";
    }

    if (Object.keys(feedbackErrors).length > 0) {
      console.error("Feedback form validation errors:", feedbackErrors);
      setFormErrors(feedbackErrors);
      return;
    }

    console.log("Submitting feedback:", feedbackFormData);

    setFeedbackFormData({
      rating: "",
      feedback: "",
    });
    setSubmitted(false);
  };

  return (
    <>
      <div className="passenger-page">
        <div className="passenger-info">
          <img
            src="path/to/profile-pic.jpg"
            alt="Profile Pic"
            className="profile-pic"
          />
          <h2>Full Name:</h2>
          <p>Username: </p>
        </div>

        <div className="passenger-container">
          {!submitted ? (
            // Display main form if not submitted
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
                onClick={submitRequest}
              >
                Submit Trip
              </button>
            </div>
          ) : (
            // Display feedback form if submitted
            <FeedbackForm
              feedbackFormData={feedbackFormData}
              formErrors={formErrors}
              handleFeedbackChange={handleFeedbackChange}
              handleFeedbackSubmit={handleFeedbackSubmit}
            />
          )}

          <div>
            <GoogleMaps height="300px" width="750px" location={location} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerPage;