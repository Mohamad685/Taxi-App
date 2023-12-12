import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleLogin = () => {
		setUsername("");
		setPassword("");
		setErrorMessage("");
		if (
			!username.trim() ||
			!password.trim() ||
			username !== "username" ||
			password !== "password"
		) {
			setErrorMessage("Incorrect username or password. Please try again!");
		}
	};
	return (
		<div className="login-container">
			<div className="form">
				<h2>Login</h2>
				{errorMessage && <p className="error-message">{errorMessage}</p>}
				<label className="label">
					Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
					/>
				</label>
				<label className="label">
					Password:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input password-input"
					/>
				</label>
				<span className="signup-statement">
					Don't Have An Account?
					<Link to="/Register" className="signup-button">Sign Up!</Link>
				</span>

				<button
					type="button"
					onClick={handleLogin}
					className="login-button">
					Login
				</button>
			</div>
			<img
				src="../../../src/assets/images/about-img.jpg"
				alt="car"
				className="car-image"></img>
		</div>
	);
};

export default Login;
