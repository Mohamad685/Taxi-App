import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ location }) => {
  const mapStyles = {
    height: '300px',
    width: '750px',
  };

  const defaultCenter = {
    lat: 33.8938,
    lng: 35.5018,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBNR-2gxzagHoZIHkpQ-RCYrYxMnKRhgLc">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

