import React from 'react';
import './PassengerRequest.css';

const PassengerRequestForm = ({ request, onAccept, onReject, accepted, rejected }) => {
  if (rejected) {
    return null;
  }

  const { passengerName, pickupLocation, dropLocation } = request;

  return (
    <tr>
      <td>{passengerName}</td>
      <td>{pickupLocation}</td>
      <td>{dropLocation}</td>
      <td>
        <button onClick={onAccept}>Accept</button>
        <button onClick={onReject}>Reject</button>
      </td>
    </tr>
  );
};

export default PassengerRequestForm;
