import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <div className="username-div">
        <label htmlFor="user">Username</label>
        <input type="text" id="user" className="user" placeholder="username" />
      </div>
      <div className="password-div">
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          className="password"
          placeholder="password"
        />
      </div>
    </div>
  );
}
