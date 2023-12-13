import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "./login.css";

import { sendRequest } from "../../request";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await sendRequest({
      route: "login",
      body: {
        email,
        password,
      },
      method: "POST",
    });
    if(response.data.token){
      localStorage.setItem('token', response.data.token);
      navigate('/admin')
    }
    

  };
  return (
    <div className="flex column center">
      <div>
        <img src={require("./admin-logo.png")} className="admin-logo" alt="" />
      </div>

      <form
        action=""
        method="post"
        className="flex center column form"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input-text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" className="login-btn" />
      </form>
    </div>
  );
}

export default LoginPage;
