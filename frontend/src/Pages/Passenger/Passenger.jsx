import React, { useState } from "react";
import "./Passenger.css";
import GoogleMaps from "../../Components/Map/Map";

const PassengerPage = () => {
	// Initial form data state
	const initialFormData = {
		pickup: "",
		drop: "",
		phone: "",
	};

	// Form data, errors, submission status, and feedback state
	const [formData, setFormData] = useState(initialFormData);
	const [formErrors, setFormErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [feedbackFormData, setFeedbackFormData] = useState({
		rating: "",
		feedback: "",
	});

	// Hardcoded location for Google Maps (replace with your actual logic)
	const location = {
		lat: -34.397,
		lng: 150.644,
	};

	// Handle input change for the main form
	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
		setFormErrors({ ...formErrors, [id]: "" });
	};

	// Handle input change for the feedback form
	const handleFeedbackChange = (e) => {
		const { id, value } = e.target;
		setFeedbackFormData({ ...feedbackFormData, [id]: value });
	};

	// Handle submission of the main form
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

	// Handle submission of the feedback form
	const handleFeedbackSubmit = () => {
		// Validate feedback form data
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
			// Handle feedback form validation errors
			console.error("Feedback form validation errors:", feedbackErrors);
			setFormErrors(feedbackErrors); // Update state with feedback errors
			return;
		}

		// Handle feedback submission logic here
		console.log("Submitting feedback:", feedbackFormData);

		// Reset state after handling feedback
		setFeedbackFormData({
			rating: "",
			feedback: "",
		});
		setSubmitted(false);
	};

	return (
		<>
			<div className="passenger-page">
				{/* Display user information (replace with actual user data) */}
				<div className="passenger-info">
					<img
						src="path/to/profile-pic.jpg"
						alt="Profile Pic"
						className="profile-pic"
					/>
					<h2>Full Name:</h2>
					<p>Username: </p>
				</div>

				{/* Main container for form and map */}
				<div className="passenger-container">
					{!submitted ? (
						// Display main form if not submitted
						<div className="passenger-inputs">
							<div className="input-group">
								<label
									className="passenger-label"
									htmlFor="pickup">
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
								<label
									className="passenger-label"
									htmlFor="drop">
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
								<label
									className="passenger-label"
									htmlFor="phone">
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
								onClick={handleSubmit}>
								Submit Trip
							</button>
						</div>
					) : (
						// Display feedback form if submitted
						<div className="feedback-form">
							<div className="input-group">
								<label
									className="passenger-label"
									htmlFor="rating">
									Rating (1-5):
								</label>
								<input
									type="number"
									id="rating"
									className="passenger-input"
									placeholder="Enter rating"
									value={feedbackFormData.rating}
									onChange={handleFeedbackChange}
								/>
								<div className="error-message">{formErrors.rating}</div>
							</div>

							<div className="input-group">
								<label
									className="passenger-label"
									htmlFor="feedback">
									Feedback:
								</label>
								<input
									type="text"
									id="feedback"
									className="passenger-feedback-input"
									placeholder="Enter feedback"
									value={feedbackFormData.feedback}
									onChange={handleFeedbackChange}
								/>
								<div className="error-message">{formErrors.feedback}</div>
							</div>

							<button
								type="button"
								className="submit-button"
								onClick={handleFeedbackSubmit}>
								Submit Feedback
							</button>
						</div>
					)}

					{/* <div>
						<GoogleMaps location={location} />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default PassengerPage;
