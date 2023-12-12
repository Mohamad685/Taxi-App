import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    console.log('Register clicked with username:', username, 'email:', email, 'and password:', password);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
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
        <button type="button" onClick={handleRegister} className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
