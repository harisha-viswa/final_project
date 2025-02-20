import React, { useState } from "react";
import "../styles/Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/background.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    accountType: "free",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registration Data:", formData);

    // Create a new user record
    const newRecord = [
      formData.email,
      formData.username,
      formData.password,
      formData.phonenumber,
      formData.accountType,
    ];

    // Read existing CSV data from localStorage
    const existingData = localStorage.getItem("userDataCSV");

    let updatedData = existingData ? existingData : "Email,Username,Password,PhoneNumber,AccountType\n";

    // Append the new record to the existing data
    updatedData += `${newRecord.join(",")}\n`;

    // Save the updated CSV data back to localStorage
    localStorage.setItem("userDataCSV", updatedData);

    alert("Account created successfully!");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#E0F7FA",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="row w-75">
          {/* Sign-Up Form */}
          <div className="col-md-5 p-4 border rounded shadow bg-white" style={{ height: "90vh" }}>
            <h2 className="text-center mb-4">SIGN UP</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email ID:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Re-confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone number */}
              <div className="mb-3">
                <label className="form-label">Phone Number:</label>
                <input
                  type="text"
                  name="phonenumber"
                  className="form-control"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Account Type Selection */}
              <div className="mb-3">
                <label className="form-label d-block">Type:</label>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="accountType"
                    value="recruiter"
                    checked={formData.accountType === "recruiter"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Recruiter</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="accountType"
                    value="candidate"
                    checked={formData.accountType === "candidate"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Candidate</label>
                </div>
              </div>

              <button
                type="submit"
                className="btn w-100 text-white"
                style={{ backgroundColor: "#008080", border: "none" }}
              >
                Create Account
              </button>
            </form>
          </div>

          {/* Image Placeholder */}
          <div className="col-md-7 d-flex align-items-center justify-content-center border rounded shadow bg-light p-0" style={{ height: "90vh" }}>
            <img
             src={bgImage}// Correct relative path
              alt="Signup Illustration"
              className="img-fluid"
              style={{ width: "100%", height: "100vh", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



