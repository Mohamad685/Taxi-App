import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

import { sendRequest } from "../../request";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const submitLogin = async () => {
    if (email === "" || password === "") {
      setErrorMessage("Incorrect email or password. Please try again!");
    }
    const response = await sendRequest({
      route: "login",
      body: {
        email,
        password,
      },
      method: "POST",
    });

    console.log(response);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      if (response.data.role == "passenger") {
        console.log("asdds");
        navigate("/get-drive");
      } else if (response.data.role == "driver") {
        navigate("/driver");
      }
    } else {
      setErrorMessage("Incorrect email or password. Please try again!");
    }
  };

  const handleLogin = async () => {
    if (
      !email.trim() ||
      !password.trim() ||
      email !== "email" ||
      password !== "password"
    ) {
      setErrorMessage("Incorrect email or password. Please try again!");
    } else {
      const response = await sendRequest({
        route: "login",
        body: {
          email,
          password,
        },
        method: "POST",
      });
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="form">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label className="label">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Email"
          />
        </label>
        <label className="label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input password-input"
            placeholder="Password"
          />
        </label>
        <span className="signup-statement">
          Don't Have An Account?
          <Link to="/Register" className="signup-button">
            Sign Up!
          </Link>
        </span>

        <button type="button" onClick={submitLogin} className="login-button">
          Login
        </button>
      </div>
      <img
        src="../../../src/assets/images/about-img.jpg"
        alt="car"
        className="car-image"
      ></img>
    </div>
  );
};

export default Login;
