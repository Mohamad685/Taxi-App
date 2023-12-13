import React, { useState, useEffect } from 'react';
import PassengerRequestForm from '../../Components/PassengerRequest/PassengerRequest';

// const DriverPage = () => {
//   const [currentRequestIndex, setCurrentRequestIndex] = useState(0);
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     // Fetch requests from the backend API
//     const fetchRequests = async () => {
//       try {
//         // Replace 'your-api-endpoint' with the actual endpoint to fetch requests
//         const response = await fetch('your-api-endpoint');
//         const data = await response.json();
//         setRequests(data); // Assuming the data is an array of passenger requests
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };

//     fetchRequests();
//   }, []); // Runs once on component mount

//   const handleAccept = () => {
//     // Implement logic to send the acceptance to the backend
//     const currentRequest = requests[currentRequestIndex];
//     console.log(`Accepted request with ID: ${currentRequest.id}`);

//     // Move to the next request
//     setCurrentRequestIndex(currentRequestIndex + 1);
//   };

//   const handleReject = () => {
//     // Implement logic to send the rejection to the backend
//     const currentRequest = requests[currentRequestIndex];
//     console.log(`Rejected request with ID: ${currentRequest.id}`);

//     // Move to the next request
//     setCurrentRequestIndex(currentRequestIndex + 1);
//   };

//   return (
//     <div className="driver-page">
//       <h1>Driver Page</h1>
//       {requests.length > 0 ? (
//         <PassengerRequestForm
//           request={requests[currentRequestIndex]}
//           onAccept={handleAccept}
//           onReject={handleReject}
//         />
//       ) : (
//         <p>No requests at the moment.</p>
//       )}
//     </div>
//   );
// };

// export default DriverPage;


const mockRequests = [
  {
    id: 1,
    passengerName: 'John Doe',
    pickupLocation: '123 Main St',
    dropLocation: '456 Elm St',
  },
  {
    id: 2,
    passengerName: 'Jane Smith',
    pickupLocation: '789 Oak St',
    dropLocation: '012 Pine St',
  },
  // Add more mock requests as needed
];

const DriverPage = () => {
    const [acceptedRequests, setAcceptedRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);
  
    const handleAccept = (requestId) => {
      // Implement logic to send the acceptance to the backend
      // and update the state
      setAcceptedRequests((prevAccepted) => [...prevAccepted, requestId]);
    };
  
    const handleReject = (requestId) => {
      // Implement logic to send the rejection to the backend
      // and update the state
      setRejectedRequests((prevRejected) => [...prevRejected, requestId]);
    };
  
    return (
      <div className="driver-page">
        {mockRequests.length > 0 ? (
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
        ) : (
          <p>No requests at the moment.</p>
        )}
      </div>
    );
  };
  
  export default DriverPage;