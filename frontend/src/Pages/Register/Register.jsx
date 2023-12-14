import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

import { sendRequest } from "../../request";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("passenger");
  const [serialNumber, setSerialNumber] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
	const requestBody = {
		email,
		password,
		first_name: firstName,
		last_name: lastName,
		type: userType,
		img_url: "noprofile.png",
	  };
	  
	  // Include license for "driver" type
	  if (userType === "driver") {
		requestBody.license = licenseId;
	  }
	  
	  // Include invitation_code for "admin" type
	  if (userType === "admin") {
		requestBody.invitation_code = serialNumber;
	  }
    const response = await sendRequest({
      route: "register",
      body: requestBody,
      method: "POST",
    });

    console.log(response);
    if (response) {
      if (userType === "driver") {
        navigate("/driver");
      } else if (userType === "passenger") {
        navigate("/get-drive");
      }
    }
  };
  const handleRegister = async () => {
    // Basic client-side validation
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      setErrorMessage("All fields are mandatory.");
      return;
    }

    // If user type is 'admin' or 'driver', check for additional fields
    if (
      (userType === "admin" || userType === "driver") &&
      !serialNumber.trim()
    ) {
      setErrorMessage("Serial number is required.");
      return;
    }

    if (userType === "driver" && !licenseId.trim()) {
      setErrorMessage("License ID is required for drivers.");
      return;
    }

    // Simulating user check in the database
    const isUserExists = checkUserExists(email);
    if (isUserExists) {
      setErrorMessage(
        "Username already exists. Please choose a different username."
      );
      return;
    }

    // Perform registration logic here (simulated with a console log)
    console.log("Register clicked with", {
      firstName,
      lastName,
      username: email,
      email,
      password,
      userType,
      serialNumber,
      licenseId,
    });

    // Fetching Data

    // Clearing fields and error message after successful registration
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setUserType("passenger");
    setSerialNumber("");
    setLicenseId("");
    setErrorMessage("");
  };

  const checkUserExists = (usernameToCheck) => {
    // Simulating a database check (replace with actual logic)
    const existingUsers = ["existingUser1", "existingUser2", "existingUser3"];
    return existingUsers.includes(usernameToCheck);
  };

  return (
    <div className="register-container">
      <img
        src="../../../src/assets/images/slider-img.png"
        alt="car"
        className="car-side-image"
      ></img>
      <div className="register-form">
        <span className="register-title">Register</span>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="name-fields">
          <label className="register-label">
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="register-input"
              placeholder="First Name"
            />
          </label>
          <label className="register-label">
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="register-input"
              placeholder="Last Name"
            />
          </label>
        </div>
        <label className="register-label">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
            placeholder="E-mail"
          />
        </label>
        <label className="register-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
            placeholder="Password"
          />
        </label>
        <div className="user-type-radio">
          <label className="register-label">User Type:</label>
          <div>
            <label>
              <input
                type="radio"
                value="passenger"
                checked={userType === "passenger"}
                onChange={() => setUserType("passenger")}
              />
              Passenger
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="driver"
                checked={userType === "driver"}
                onChange={() => setUserType("driver")}
              />
              Driver
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="admin"
                checked={userType === "admin"}
                onChange={() => setUserType("admin")}
              />
              Admin
            </label>
          </div>
        </div>
        {userType === "admin" && (
          <label className="register-label">
            Serial Number:
            <input
              type="text"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              className="register-input"
              placeholder="Serial Number"
            />
          </label>
        )}
        {userType === "driver" && (
          <label className="register-label">
            License ID:
            <input
              type="text"
              value={licenseId}
              onChange={(e) => setLicenseId(e.target.value)}
              className="register-input"
              placeholder="License ID"
            />
          </label>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className="register-button"
        >
          Register
        </button>
        <span className="login-statement">
          Have An Account?
          <Link to="/Login" className="login-small-button">
            Sign In!
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
