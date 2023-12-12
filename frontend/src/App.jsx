// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/styles/index.css";
// import Home from './Home';
// import Driver from './Driver';
// import GetDrive from './GetDrive';
import Login from './Components/LoginPage/LoginPage';
import Register from './Components/Register/Register';

import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/driver" element={<Driver/>} />
        <Route path="/get-drive" element={<GetDrive/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
