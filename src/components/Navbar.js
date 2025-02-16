import { Link } from 'react-router-dom';

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#008080" }}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" href="#">
          Solutions
        </Link>
        <Link className="navbar-brand text-white fw-bold" to="/">
          MyApp
        </Link>
        <div>
          <Link className="btn btn-light mx-2" to="/login">Login</Link>
          <Link className="btn btn-light" to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;