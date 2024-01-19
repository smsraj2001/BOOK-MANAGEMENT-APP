// client/src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Import the CSS file for styling

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Book App
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
