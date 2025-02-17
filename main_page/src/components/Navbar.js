import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#008080" }}>
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand text-white fw-bold" to="/">
          DigiHr
        </Link>

        {/* Navigation Links */}
        <div className="d-flex">
          <Link className="btn btn-light mx-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-light" to="/register">
            Register
          </Link>
          <Link to="/candidate">Candidate</Link> 
          <Link to="/recruiter">Recruiter</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
