import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import "../styles/Login.css";

const Login = () => {
  // Separate state for recruiter and candidate login
  const [recruiterData, setRecruiterData] = useState({ username: "", password: "" });
  const [candidateData, setCandidateData] = useState({ username: "", password: "" });

  // Handle input change for recruiter
  const handleRecruiterChange = (e) => {
    setRecruiterData({ ...recruiterData, [e.target.name]: e.target.value });
  };

  // Handle input change for candidate
  const handleCandidateChange = (e) => {
    setCandidateData({ ...candidateData, [e.target.name]: e.target.value });
  };

  // Handle form submission separately
  const handleRecruiterSubmit = (e) => {
    e.preventDefault();
    console.log("Recruiter Login Data:", recruiterData);
  };

  const handleCandidateSubmit = (e) => {
    e.preventDefault();
    console.log("Candidate Login Data:", candidateData);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Recruiter Login Card */}
        <div className="card">
          <h2>Recruiter Login</h2>
          <form onSubmit={handleRecruiterSubmit}>
            <input
              type="text"
              name="username"
              className="input-field"
              placeholder="Username"
              value={recruiterData.username}
              onChange={handleRecruiterChange}
              required
            />
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={recruiterData.password}
              onChange={handleRecruiterChange}
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
          <form onSubmit={handleCandidateSubmit}>
            <input
              type="text"
              name="username"
              className="input-field"
              placeholder="Username"
              value={candidateData.username}
              onChange={handleCandidateChange}
              required
            />
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={candidateData.password}
              onChange={handleCandidateChange}
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
