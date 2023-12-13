import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/styles/index.css";
// import Home from './Home';
import DriverPage from './Pages/Driver/Driver';
import PassengerPage from './Pages/Passenger/Passenger';
import Login from './Pages/LoginPage/LoginPage';
import Register from './Pages/Register/Register';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/driver" element={<DriverPage/>} />
        <Route path="/get-drive" element={<PassengerPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
