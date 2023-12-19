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
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const checkUserExists = (usernameToCheck) => {
		// Simulating a database check (replace with actual logic)
		const existingUsers = ["existingUser1", "existingUser2", "existingUser3"];
		return existingUsers.includes(usernameToCheck);
	};

	const handleRegister = async () => {
		try {
			if (
				!firstName.trim() ||
				!lastName.trim() ||
				!email.trim() ||
				!password.trim()
			) {
				setErrorMessage("All fields are mandatory.");
				return;
			}

			// Additional input validation (e.g., email format, password strength) can be added here

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

			const isUserExists = checkUserExists(email);
			if (isUserExists) {
				setErrorMessage(
					"Username already exists. Please choose a different username."
				);
				return;
			}

			// Set loading state here
			setLoading(true);

			// const response = await sendRequest({
			// 	route: "register",
			// 	body: {
			// 		email,
			// 		password,
			// 		first_name: firstName,
			// 		last_name: lastName,
			// 		type: userType,
			// 		img_url: "noprofile.png",
			// 		license: userType === "driver" ? licenseId : undefined,
			// 		invitation_code: userType === "admin" ? serialNumber : undefined,
			// 	},
			// 	method: "POST",
			// });
			const requestBody = {
				email,
				password,
				first_name: firstName,
				last_name: lastName,
				type: userType,
				img_url: "noprofile.png",
			};

			if (userType === "driver") {
				requestBody.license = licenseId;
			}

			if (userType === "admin") {
				requestBody.invitation_code = serialNumber;
			}
			const response = await sendRequest({
				route: "register",
				body: requestBody,
				method: "POST",
			});
			console.log(response);

			// Clear loading state here
			setLoading(false);

			console.log(response);
			if (response) {
				if (userType === "driver") {
					navigate("/driver");
				} else if (userType === "passenger") {
					navigate("/get-drive");
				}
			}
		} catch (error) {
			// Handle API request errors here
			console.error("Registration failed:", error);
			setErrorMessage("Registration failed. Please try again.");
			setLoading(false);
		}
	};

	return (
		<div className="register-container">
			<img
				src="../../../src/assets/images/slider-img.png"
				alt="car"
				className="car-side-image"></img>
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
					onClick={handleRegister}
					className="register-button"
					disabled={loading}>
					{loading ? "Registering..." : "Register"}
				</button>
				<span className="login-statement">
					Have An Account?
					<Link
						to="/Login"
						className="login-small-button">
						Sign In!
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Register;
