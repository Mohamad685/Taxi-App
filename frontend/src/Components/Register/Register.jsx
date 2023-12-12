import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('passenger'); // Default to passenger
  const [serialNumber, setSerialNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    // Basic client-side validation
    if (!username.trim() || !email.trim() || !password.trim()) {
      setErrorMessage('All fields are mandatory.');
      return;
    }

    // If user type is 'admin', check for serial number
    if (userType === 'admin' && !serialNumber.trim()) {
      setErrorMessage('Serial number is required for admin.');
      return;
    }

    // Simulating user check in the database
    const isUserExists = checkUserExists(username);
    if (isUserExists) {
      setErrorMessage('Username already exists. Please choose a different username.');
      return;
    }

    // Perform registration logic here (simulated with a console log)
    console.log('Register clicked with username:', username, 'email:', email, 'password:', password, 'userType:', userType, 'serialNumber:', serialNumber);

    // Clearing fields and error message after successful registration
    setUsername('');
    setEmail('');
    setPassword('');
    setUserType('passenger');
    setSerialNumber('');
    setErrorMessage('');
  };

  const checkUserExists = (usernameToCheck) => {
    // Simulating a database check (replace with actual logic)
    const existingUsers = ['existingUser1', 'existingUser2', 'existingUser3'];
    return existingUsers.includes(usernameToCheck);
  };

  return (
    <div className="register-container">
     <img
				src="../../../src/assets/images/slider-img.png"
				alt="car"
				className="car-side-image"></img>
      <div className="register-form">
      <h2>Register</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label className="register-label">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="register-input"
          />
        </label>
        <label className="register-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
        </label>
        <label className="register-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
        </label>
        <div className="user-type-radio">
          <label className="register-label">
            User Type:
          </label>
          <div>
            <label>
              <input
                type="radio"
                value="passenger"
                checked={userType === 'passenger'}
                onChange={() => setUserType('passenger')}
              />
              Passenger
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="driver"
                checked={userType === 'driver'}
                onChange={() => setUserType('driver')}
              />
              Driver
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="admin"
                checked={userType === 'admin'}
                onChange={() => setUserType('admin')}
              />
              Admin
            </label>
          </div>
        </div>
        {userType === 'admin' && (
          <label className="register-label">
            Serial Number:
            <input
              type="text"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              className="register-input"
            />
          </label>
        )}
        <button type="button" onClick={handleRegister} className="register-button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
