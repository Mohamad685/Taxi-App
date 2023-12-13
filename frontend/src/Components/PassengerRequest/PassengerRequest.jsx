import React from 'react';

const PassengerRequestForm = ({ request, onAccept, onReject, accepted, rejected }) => {
  const { passengerName, pickupLocation, dropLocation } = request;

  const rowStyle = {
    backgroundColor: accepted ? 'yellow' : rejected ? 'red' : 'inherit',
    color: accepted ? 'black' : rejected ? 'white' : 'inherit',
  };

  return (
    <tr style={rowStyle}>
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
