// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">My Website</div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/nothome">Not Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;