import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed

import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Recruiter Login Card */}
        <div className="card">
          <h2>Recruiter Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              className="input-field"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>

        {/* Candidate Login Card */}
        <div className="card">
          <h2>Candidate Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              className="input-field"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>

        {/* New User Element */}
        <div className="new-user">
          <span>New User? </span>
          <Link to="/register" className="register-link">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
