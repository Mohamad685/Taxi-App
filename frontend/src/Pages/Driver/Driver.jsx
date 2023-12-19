import React, { useState } from "react";
import PassengerRequestForm from "../../Components/PassengerRequest/PassengerRequest";
import FeedbackForm from "../../Components/FeedbackForm/Feedback"; // Import the FeedbackForm component
import "./Driver.css";
import GoogleMaps from "../../Components/Map/Map";

const mockRequests = [
	{
		id: 1,
		passengerName: "Mohammad Fakih",
		pickupLocation: "Baabda",
		dropLocation: "Beirut",
	},
	{
		id: 2,
		passengerName: "Ahmad Jamoul",
		pickupLocation: "Nabateye",
		dropLocation: "Batroun",
	},
  {
		id: 3,
		passengerName: "Ahmad Rammal",
		pickupLocation: "Nabateye",
		dropLocation: "Alay",
	},
  {
		id: 4,
		passengerName: "Ali Safa",
		pickupLocation: "Nabateye",
		dropLocation: "Batroun",
	}
];

const DriverPage = () => {
	const [acceptedRequests, setAcceptedRequests] = useState([]);
	const [rejectedRequests, setRejectedRequests] = useState([]);
	const [showFeedbackForm, setShowFeedbackForm] = useState(false);

	const handleAccept = (requestId) => {
		setAcceptedRequests((prevAccepted) => [...prevAccepted, requestId]);
		setShowFeedbackForm(true);
	};

	const handleReject = (requestId) => {
		setRejectedRequests((prevRejected) => [...prevRejected, requestId]);
	};

	const [feedbackFormData, setFeedbackFormData] = useState({
		rating: "",
		feedback: "",
	});

	const [formErrors, setFormErrors] = useState({});

	const handleFeedbackChange = (e) => {
		const { id, value } = e.target;
		setFeedbackFormData({ ...feedbackFormData, [id]: value });
		setFormErrors({ ...formErrors, [id]: "" });
	};

	const handleFeedbackSubmit = () => {
		const errors = {};

		if (!feedbackFormData.rating.trim()) {
			errors.rating = "Rating is required";
		}

		if (!feedbackFormData.feedback.trim()) {
			errors.feedback = "Feedback is required";
		}

		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}

		setShowFeedbackForm(false);
		setFeedbackFormData({
			rating: "",
			feedback: "",
		});
		setFormErrors({});
	};

	return (
		<div className="driver-page">
			{mockRequests.length > 0 ? (
				showFeedbackForm ? (
					<FeedbackForm
						feedbackFormData={feedbackFormData}
						formErrors={formErrors}
						handleFeedbackChange={handleFeedbackChange}
						handleFeedbackSubmit={handleFeedbackSubmit}
					/>
				) : (
					<table className="request-table">
						<thead>
							<tr>
								<th>Passenger Name</th>
								<th>Pickup Location</th>
								<th>Drop Location</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{mockRequests.map((request) => (
								<PassengerRequestForm
									key={request.id}
									request={request}
									onAccept={() => handleAccept(request.id)}
									onReject={() => handleReject(request.id)}
									accepted={acceptedRequests.includes(request.id)}
									rejected={rejectedRequests.includes(request.id)}
								/>
							))}
						</tbody>
					</table>
				)
			) : (
				<p>No requests at the moment.</p>
			)}
			<div>
				<GoogleMaps
					height="400px"
					width="550px"
					location={location}
				/>
			</div>
		</div>
	);
};

export default DriverPage;
