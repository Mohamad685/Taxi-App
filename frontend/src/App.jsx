import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/styles/index.css";
import HomePage from './Pages/HomePage/HomePage';// import Driver from './Driver';
import PassengerPage from './Pages/Passenger/Passenger';
import Login from './Pages/LoginPage/LoginPage';
import Register from './Pages/Register/Register';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
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
