import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/styles/index.css";
import HomePage from './Pages/HomePage/HomePage';
import PassengerPage from './Pages/Passenger/Passenger';
import Login from './Pages/LoginPage/LoginPage';
import Register from './Pages/Register/Register';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import DriverPage from './Pages/Driver/Driver'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/driver" element={<DriverPage/>} />
        <Route path="/get-drive" element={<PassengerPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  );
};

export default App;
