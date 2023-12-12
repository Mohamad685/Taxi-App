import React from "react";
import './login.css'

function LoginPage() {
  return (
    <div className="flex column center">
      <div >
        <img src={require("./admin-logo.png")} className="admin-logo" alt="" />
      </div>

      <form action="" method="post" className="flex center column form">
        <input type="text" className="input-text" placeholder="Email"/> 
        <input type="password" className="input-text" placeholder="Password"/> 
        <input type="submit" value="Login" className="login-btn"/>
      </form>
    </div>
  );
}

export default LoginPage;
