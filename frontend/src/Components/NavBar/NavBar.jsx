// NavBar.jsx
import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="left-part">
        <span className="logo-name">Leb-Taxi</span>
      </div>
      <div className="right-part">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/driver">Driver</Link>
          </li>
          <li>
            <Link to="/get-drive">Get a Drive</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
