import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-list">
        <Link to="/" className="footerlink">
          Home
        </Link>
        <Link to="/driver" className="footerlink">
          Driver
        </Link>
        <Link to="/get-drive" className="footerlink">
          Get a Drive
        </Link>
        <Link to="/login" className="footerlink">
          Login
        </Link>
        <Link to="/Register" className="footerlink">
          Register
        </Link>
      </div>
      <div className="footer-list">
        <a href="#" className="logo logo1"></a>
        <a href="#" className="logo logo2"></a>
        <a href="#" className="logo logo3"></a>
        <a href="#" className="logo logo4"></a>
      </div>
    </div>
  );
};

export default Footer;
